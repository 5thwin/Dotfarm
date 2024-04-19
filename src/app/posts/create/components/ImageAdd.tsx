'use client';
import AddIcon from '@/../public/icon/addImage.svg';
import clsx from 'clsx';
import useCreateImageStore from '../store/createImageStore';
import { saveTempImage } from '@/api/common/create';
import Toast from '@/app/components/common/Toast';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isErrorObject } from '@/utils/error/httpError';

export default function ImageAdd() {
	const router = useRouter();
	const { addImages, addServerImagePath, deleteImage, updateImageState } =
		useCreateImageStore();
	const [fileInputKey, setFileInputKey] = useState(0); // input 요소를 새로운 요소로 인식하도록 하여 초기화를 보장

	const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		setFileInputKey((previous) => previous + 1);
		const fileList = e.target.files;
		if (!fileList || !fileList[0]) return;
		const formData = new FormData();
		formData.append('image', fileList[0]);
		try {
			const newImageStates = addImages(fileList);
			const res = await saveTempImage(formData);
			if (isErrorObject(res)) {
				throw new Error(JSON.stringify(res));
			}
			const { fileName } = res;
			updateImageState(newImageStates[0].url, 'Complete');
			addServerImagePath(fileName);
		} catch (error) {
			//이미지 업로드에 실패
			deleteImage();
			Toast.fire({ title: '이미지 업로드에 실패하였습니다.', icon: 'error' });
			if (error instanceof Error && error.message.includes('401')) {
				router.push('/401');
			}
		}
	};

	return (
		<form className={formContainer}>
			<label htmlFor="file" className="cursor-pointer flexCenter flex-col">
				<input
					key={fileInputKey}
					type="file"
					id="file"
					className="hidden"
					onChange={handleAddImage}
				/>
				{/* Placeholder or default profile icon */}
				<AddIcon width="28" height="23" fill="#7D7B7B" />
				<span className="text-gray-400 font-bold text-sm lg:text-base">
					이미지 추가+
				</span>
			</label>
		</form>
	);
}

const formContainer = clsx(
	'flex flex-col justify-center items-center h-full',
	'rounded-10 w-[110px] lg:w-[185px] h-full',
	'bg-subGray border-lineColor border'
);

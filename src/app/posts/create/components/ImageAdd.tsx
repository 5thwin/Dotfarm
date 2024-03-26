'use client';
import AddIcon from '@/../public/icon/addImage.svg';
import clsx from 'clsx';
import useCreateImageStore from '../store/createImageStore';
import { saveTempImage } from '@/api/common/create';

export default function ImageAdd() {
	const { addImages } = useCreateImageStore();

	const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		const fileList = e.target.files;
		if (!fileList || !fileList[0]) return;
		addImages(fileList);
		const formData = new FormData();
		console.log(fileList[0]);
		formData.append('image', fileList[0]);
		try {
			await saveTempImage(formData);
		} catch (error) {}
	};

	return (
		<form className={formContainer} action={saveTempImage}>
			<label htmlFor="file" className="cursor-pointer flexCenter flex-col">
				<input
					type="file"
					id="file"
					className="hidden"
					onChange={handleAddImage}
				/>
				{/* Placeholder or default profile icon */}
				<AddIcon width="28" height="23" fill="#7D7B7B" />
				<span className="text-gray-400 font-bold">이미지 추가+</span>
			</label>
		</form>
	);
}

const formContainer = clsx(
	'flex flex-col justify-center items-center h-full',
	'rounded-10 w-[185px] h-[110px]',
	'bg-subGray border-lineColor border'
);

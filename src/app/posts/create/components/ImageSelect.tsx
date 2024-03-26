import clsx from 'clsx';
import useCreatePostStore from '../store/createPostStore';
import AddIcon from '../../../../../public/icon/addImage.svg';
import { getLocalItem } from '@/utils/localstorage';
import { saveTempImage } from '@/api/common/create';
import { useCallback } from 'react';
import { fileToBase64 } from '@/utils/file';

export default function ImageSelect() {
	const { imageURL } = useCreatePostStore();
	const handleImageChange = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0]; // 선택한 파일 가져오기
			if (!file) return;
			const imageBase64 = await fileToBase64(file); // 파일을 Base64로 인코딩

			const auth = getLocalItem('auth');
			const accessToken = auth ? JSON.parse(auth).accessToken : null;

			try {
				const res = await saveTempImage(imageBase64, accessToken); // 파일 자체를 전달
			} catch (error) {
				console.error('Error saving temp image:', error);
			}
		},
		[]
	);
	return (
		<label htmlFor="post-image" className="cursor-pointer">
			<input
				type="file"
				id="post-image"
				className="hidden"
				onChange={handleImageChange}
			/>
			<div className={imageContainer}>
				{imageURL ? (
					<img
						src={imageURL}
						alt="게시글 이미지 등록"
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="flex flex-col justify-center items-center h-full">
						{/* Placeholder or default profile icon */}
						<AddIcon width="28" height="23" fill="#7D7B7B" />
						<span className="text-gray-400 font-bold">이미지 추가+</span>
					</div>
				)}
			</div>
		</label>
	);
}

// style
const imageContainer = clsx(
	'rounded-10 w-full h-[177px]  overflow-hidden bg-subGray',
	'border border-mainLine'
);

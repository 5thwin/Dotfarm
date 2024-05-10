'use client';
import AddIcon from '@/../public/icon/addImage.svg';
import clsx from 'clsx';
import useImageAdd from '../hook/useImageAdd';

export default function ImageAdd() {
	const { fileInputKey, handleAddImage, isConverting } = useImageAdd();

	return (
		<form className={formContainer}>
			<label htmlFor="file" className="cursor-pointer flexCenter flex-col">
				<input
					key={fileInputKey}
					type="file"
					id="file"
					className="hidden"
					accept="image/png, image/jpeg, image/jpg, image/HEIC, image/heic"
					onChange={handleAddImage}
					disabled={isConverting}
				/>
				{/* Placeholder or default profile icon */}
				<AddIcon width="28" height="23" fill="#7D7B7B" />
				<span className="text-gray-400 font-bold text-sm lg:text-base">
					{isConverting ? '이미지 변환 중' : '이미지 추가+'}
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

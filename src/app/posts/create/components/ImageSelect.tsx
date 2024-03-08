import clsx from 'clsx';
import useCreatePostStore from '../store/createPostStore';
import AddIcon from '../../../../../public/icon/addImage.svg';

export default function ImageSelect() {
	const { setImageURL, imageURL } = useCreatePostStore();
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setImageURL(URL.createObjectURL(e.target.files[0]));
		}
	};
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
						alt="게시글 이미지 등력"
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

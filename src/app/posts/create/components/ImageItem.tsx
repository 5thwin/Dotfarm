import Image from 'next/image';
import useCreateImageStore from '../store/createImageStore';
import clsx from 'clsx';

type Props = {
	imageUrl: string;
	index: number;
};
export default function ImageItem({ imageUrl, index }: Props) {
	const { deleteImage } = useCreateImageStore();
	const handleDelete = () => {
		deleteImage(index);
	};
	return (
		<div className="relative rounded-10 w-[185px] h-[110px]">
			<Image alt="게시글 이미지" fill src={imageUrl}></Image>
			<button className={deleteStyle} onClick={handleDelete}>
				제거
			</button>
		</div>
	);
}
// style
const deleteStyle = clsx('text-subText', 'absolute right-1 bottom-1');

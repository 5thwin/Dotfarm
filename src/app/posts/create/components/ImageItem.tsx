import Image from 'next/image';
import useCreateImageStore from '../store/createImageStore';
import clsx from 'clsx';
import { getFullImagePath } from '@/utils/image';

type Props = {
	imageUrl: string;
	index: number;
};
export default function ImageItem({ imageUrl, index }: Props) {
	const { deleteImage, deleteServerImagePath } = useCreateImageStore();
	const handleDelete = () => {
		deleteImage(index);
		deleteServerImagePath(index);
	};
	return (
		<div className="relative rounded-10 w-[110px] lg:w-[185px] h-full overflow-hidden">
			<Image alt="게시글 이미지" fill src={getFullImagePath(imageUrl)}></Image>
			<button className={deleteStyle} onClick={handleDelete}>
				제거
			</button>
		</div>
	);
}
// style
const deleteStyle = clsx(
	'text-subText',
	'absolute right-1 bottom-1 bg-subGray rounded-full px-1',
	'hover:bg-gray-200'
);

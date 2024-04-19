import Image from 'next/image';
import useCreateImageStore from '../store/createImageStore';
import clsx from 'clsx';
import { getFullImagePath } from '@/utils/image';
import { ImageState } from '@/type/image';

type Props = {
	urlState: ImageState;
	index: number;
};
export default function ImageItem({ urlState, index }: Props) {
	const { url, state } = urlState;
	const { deleteImage, deleteServerImagePath } = useCreateImageStore();
	const handleDelete = () => {
		deleteImage(index);
		deleteServerImagePath(index);
	};
	return (
		<div className="relative rounded-10 w-[110px] lg:w-[185px] h-full overflow-hidden">
			{state === 'Pending' && (
				<div className="absolute bg-black z-10 opacity-30 inset-0"></div>
			)}
			<Image alt="게시글 이미지" fill src={getFullImagePath(url)}></Image>
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

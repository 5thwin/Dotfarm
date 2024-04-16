'use client';

import useCreateImageStore from '../store/createImageStore';
import ImageAdd from './ImageAdd';
import ImageItem from './ImageItem';

export default function ImagesWrapper() {
	const { imageUrls } = useCreateImageStore();
	const isMaxImage = imageUrls.length >= 3;
	return (
		<div className="flex overflow-scroll gap-2.5 h-[80px] lg:h-[110px]">
			{imageUrls.map((url, index) => (
				<ImageItem imageUrl={url} index={index} key={`post-image-${index}}`} />
			))}
			{!isMaxImage && <ImageAdd />}
		</div>
	);
}

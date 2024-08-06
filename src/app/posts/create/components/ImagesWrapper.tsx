'use client';

import { useEffect } from 'react';
import useCreateImageStore from '../store/createImageStore';
import ImageAdd from './ImageAdd';
import ImageItem from './ImageItem';

type Props = { isModifyMode?: boolean };
export default function ImagesWrapper({ isModifyMode = false }: Props) {
	const { imageUrls, reset } = useCreateImageStore();
	const isMaxImage = imageUrls.length >= 3;
	useEffect(() => {
		!isModifyMode && reset();
	}, [isModifyMode, reset]);
	return (
		<div className="flex overflow-scroll gap-2.5 h-[80px] lg:h-[110px]">
			{imageUrls.map((urlState, index) => (
				<ImageItem
					urlState={urlState}
					index={index}
					key={`post-image-${index}}`}
				/>
			))}
			{!isMaxImage && <ImageAdd />}
		</div>
	);
}

'use client';
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface CustomImageProps extends Omit<ImageProps, 'src'> {
	src: string;
	alt: string;
	errorImagePath: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
	alt,
	errorImagePath,
	...props
}) => {
	const [src, setSrc] = useState<string>(props.src);
	const errorImage = errorImagePath; // 에러 이미지 경로를 상수로 정의

	return (
		<Image
			{...props}
			src={src}
			alt={alt}
			onError={() => {
				// 현재 이미지가 이미 에러 이미지가 아니라면 에러 이미지로 변경
				if (src !== errorImage) {
					setSrc(errorImage);
				}
			}}
			placeholder="blur"
			blurDataURL="/error/letter-error.jpg"
		/>
	);
};

export default CustomImage;

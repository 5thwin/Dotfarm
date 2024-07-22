'use client';
import { ImageType } from '@/type/image';
import { getFullImagePath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import Slider from 'react-slick';

type Props = {
	images: ImageType[];
	alt: string;
};
export default function SupportPostImageSlider({ images, alt }: Props) {
	const Slides = useMemo(() => {
		return images.map((image, index) => (
			<Link key={index} href={getFullImagePath(image.path)} target="_blank">
				<div className="rounded-10 h-[340px] max-h-[340px] min-h-[187px] w-full min-w-[360px] relative border border-lineColor overflow-hidden">
					<Image
						src={getFullImagePath(image.path)}
						fill
						alt={`${alt}-${index}`}
						className="object-cover object-top"
					/>
				</div>
			</Link>
		));
	}, [images, alt]);
	return (
		<Slider
			className="w-full"
			dots
			arrows={false}
			speed={500}
			infinite
			slidesToShow={1}
			slidesToScroll={1}
			dotsClass={'dots_custom'}
			appendDots={(dots: React.ReactNode) => (
				<div
					style={{
						width: '100%',
						height: '7px',
						position: 'absolute',
						bottom: '-10px',
						left: '50%',
						transform: 'translateX(-50%)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<ul className="mx-auto flex gap-x-1 transition-all">{dots}</ul>
				</div>
			)}
		>
			{Slides}
		</Slider>
	);
}

'use client';

import { SupportProgram } from '@/type/support';
import { useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SupportProgramItem from '@/app/support-projects/components/SupportProgramItem';
import clsx from 'clsx';

type Props = {
	supportPrograms: SupportProgram[];
};

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export default function WeekSupportSlider({ supportPrograms }: Props) {
	const Slides = useMemo(() => {
		return supportPrograms.map((program, index) => (
			<div key={`mobile-slider-${index}`} className="w-full px-2.5 pb-2.5">
				<SupportProgramItem program={program} interestButton={false} />
			</div>
		));
	}, [supportPrograms]);
	return (
		<Slider
			{...settings}
			autoplay
			arrows={false}
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
					<ul className="mx-auto flex gap-x-[4px] transition-all">{dots}</ul>
				</div>
			)}
		>
			{Slides}
		</Slider>
	);
}

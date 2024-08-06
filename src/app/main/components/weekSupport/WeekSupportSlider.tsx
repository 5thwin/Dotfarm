'use client';

import { SupportProgram } from '@/type/support';
import { useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RecentSupportItem from '@/app/supports/[id]/components/RecentSupportItem';

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
		//supportPrograms 배열을 4개씩 나누어서 배열로 만들어줌
		const slides = supportPrograms.reduce((acc, cur, i) => {
			if (i % 4 === 0) acc.push([]);
			acc[acc.length - 1].push(cur);
			return acc;
		}, [] as SupportProgram[][]);
		return slides.map((supports, i) => (
			<div key={`slide-${i}`} className="flex flex-col divide-y">
				{supports.map((support) => (
					<RecentSupportItem key={support.id} support={support} />
				))}
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
					<ul className="mx-auto flex gap-x-1 transition-all">{dots}</ul>
				</div>
			)}
		>
			{Slides}
		</Slider>
	);
}

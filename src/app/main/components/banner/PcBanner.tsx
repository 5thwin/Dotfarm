import Image from 'next/image';
import GoogleSearchBox from './GoogleSearchBox';
import { Desktop } from '@/app/components/responsive/ResponsiveUI';
import clsx from 'clsx';
import Watchlist from './Watchlist';

export default function PcBanner() {
	return (
		<section
			id="main-thumb"
			className="w-screen h-[450px] bg-[#ECFFF0] relative flexCenter"
		>
			<Image
				src="/main/mainBanner.svg"
				alt="메인 배경 이미지"
				fill={true}
				className="object-cover"
				objectPosition="left"
			/>
			<div className="lg:inline-block hidden">
				<div className={bannerStyle}>
					<GoogleSearchBox />
					<Watchlist />
				</div>
			</div>
		</section>
	);
}
// style
const bannerStyle = clsx(
	'flex absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-y-5',
	'p-5 bg-white bg-opacity-70 rounded-40 backdrop-blur-md',
	'w-[600px]'
);

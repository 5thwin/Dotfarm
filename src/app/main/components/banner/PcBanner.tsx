import Image from 'next/image';
import GoogleSearchBox from './GoogleSearchBox';
import FavoriteSitesBanner from './FavoriteSitesBanner';
import { Desktop } from '@/app/components/responsive/ResponsiveUI';

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
				<div className="flexCenter absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-y-5">
					<GoogleSearchBox />
					<FavoriteSitesBanner />
				</div>
			</div>
		</section>
	);
}

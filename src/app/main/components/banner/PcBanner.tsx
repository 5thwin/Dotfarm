import Image from 'next/image';
import clsx from 'clsx';

export default function PcBanner() {
	return (
		<section id="main-thumb" className="flexCenter flex-1">
			<div className={bannerImageStyle}>
				<Image
					src="/main/mainBanner.svg"
					alt="이거 안보시면 이번년도 농사가 더 힘들어집니다. 농부에게 필요한 농업전보, 지원사업 정보를 알려드립니다."
					className="object-cover"
					objectPosition="left"
					fill
					priority
				/>
			</div>
		</section>
	);
}
// style

const bannerImageStyle = clsx(
	'relative overflow-hidden',
	'lg:w-full 2xl:w-[1218px] lg:h-[392px] lg:rounded-30',
	'w-[360px] h-[150px] rounded-20',
	'shadow-main'
);

import Image from 'next/image';
import clsx from 'clsx';
import { LandingButtonStyle } from '@/app/styles/common/buttonStyle';
import Link from 'next/link';

export default function LastSection() {
	return (
		<section
			className="relative lg:min-h-[605px] flexCenter pt-24 w-full overflow-hidden"
			style={{
				background:
					'linear-gradient(0deg, #C1FFCF 0%, rgba(255, 255, 255, 0.00) 100%)',
			}}
		>
			<div className="flex flex-col gap-y-7 items-center">
				<div className={contentsWraper}>
					<div className="flex flex-col gap-y-[15px]">
						<p className={titleStyle}>
							지금 바로
							<br />
							농업 관련 정보를 매주
							<br />
							닷팜에서 받아보세요
						</p>
						<p className={subTextStyle}>
							지원사업과 각종 자료를 뉴스레터
							<br />
							형식으로 공유드리겠습니다
						</p>
					</div>
					<Link href={'/main'} className={LandingButtonStyle}>
						<span className="font-bold lg:text-lg">{'농업정보 무료보기>'}</span>
					</Link>
				</div>

				<div className={imageContainer}>
					<Image
						src="/landing/twoFarmer.svg"
						alt="농부 두 명의 아이콘"
						sizes="(max-width: 1023px) 348px, 454px"
						fill
					/>
				</div>
			</div>
		</section>
	);
}

const contentsWraper = clsx(
	'flex flex-col items-center gap-y-9',
	'lg:items-start',
	'lg:relative lg:left-[70%]'
);
const titleStyle = clsx(
	'text-2xl font-bold text-center',
	'lg:text-left lg:text-[45px] lg:leading-normal'
);
const subTextStyle = clsx(
	'text-[#6B6B6B] text-center',
	'lg:text-left lg:text-2xl'
);
const imageContainer = clsx(
	'w-[348px] h-[367px]',
	'lg:w-[454px] lg:h-[510px]',
	'relative bottom-0',
	'lg:absolute lg:bottom-0 lg:-translate-x-1/2 translate-y-[5%]'
);

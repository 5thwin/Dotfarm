import { PATH_MAIN } from '@/utils/navigation';
import Link from 'next/link';
import DotfarmLogo from '../../landing/DotfarmLogo';
import TermButton from '../../button/TermButton';
import PrivacyButton from '../../button/PrivacyButton';
import clsx from 'clsx';

export default function Footer() {
	return (
		<footer className="w-screen h-[280px] md:h-[190px] bg-white relative border-t border-subGray whitespace-nowrap">
			<div className={contentsWrapperStyle}>
				<div className="flex lg:gap-x-[60px] gap-x-5 md:flex-row flex-col">
					<div className="flex flex-col gap-y-30px ">
						<Link href={PATH_MAIN}>
							<DotfarmLogo />
						</Link>
						<div className="flex flex-col gap-y-5px">
							<p className="text-sm lg:text-lg font-semibold">
								제휴 및 광고 문의
							</p>
							<p className="text-xs lg:text-sm">info@vandalsoft.com</p>
						</div>
					</div>
					<div className="flex flex-col gap-y-2.5">
						<div className="flex flex-col gap-y-5px text-xs lg:text-sm sm:text-left">
							<p>(주)반달소프트</p>
							<p>대표 : 이봉학 ㅣ 사업자등록번호 : 745-88-01527 </p>
							<p>본사 : 경기도 성남시 분당구 판교로289번길 20, 2동 5층</p>
							<p>이메일 : info@vandalsoft.com </p>
						</div>
						<p className="text-xs lg:text-sm">
							Copyright (주)반달소프트 All rights reserved
						</p>
					</div>
				</div>
				<div className="flex gap-x-2.5">
					<PrivacyButton className="font-bold text-sm lg:text-lg" />
					<TermButton className="font-bold text-sm lg:text-lg" />
				</div>
			</div>
		</footer>
	);
}

// style
const contentsWrapperStyle = clsx(
	'flex items-center justify-between gap-x-[60px] absolute top-1/2 -translate-y-1/2',
	'lg:inset-x-[100px] inset-x-10',
	'md:flex-row flex-col gap-y-2.5'
);

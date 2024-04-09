import { PATH_MAIN } from '@/utils/navigation';
import Link from 'next/link';
import DotfarmLogo from '../../landing/DotfarmLogo';

export default function Footer() {
	return (
		<footer className="w-screen h-[190px] bg-white relative border-t border-subGray">
			<div className="flex items-center gap-x-[60px] absolute left-[100px] top-1/2 -translate-y-1/2">
				<div className="flex flex-col gap-y-30px">
					<Link href={PATH_MAIN}>
						<DotfarmLogo />
					</Link>
					<div className="flex flex-col gap-y-5px">
						<p className="text-lg font-semibold">협력/제휴문의</p>
						<p className="text-sm">info@vandalsoft.com</p>
					</div>
				</div>
				<div className="flex flex-col gap-y-15px">
					<div className="flex flex-col gap-y-5px text-sm text-left">
						<p>(주)반달소프트</p>
						<p>대표 : 이봉학 ㅣ 사업자등록번호 : 745-88-01527 </p>
						<p>본사 : 경기도 성남시 분당구 판교로289번길 20, 2동 5층</p>
						<p>이메일 : info@vandalsoft.com </p>
					</div>
					<p className="text-sm">
						Copyright (주)반달소프트 All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
}

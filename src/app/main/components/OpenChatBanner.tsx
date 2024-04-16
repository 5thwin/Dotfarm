import { KakaoBubble } from '@/app/components/icons/KakaoBubble';
import { KAKAO_OPEN_CHAT_LINK } from '@/constants/link';
import clsx from 'clsx';
import Link from 'next/link';

// 오픈채팅방으로 가는 배너
export default function OpenChatBanner() {
	return (
		<div className={bannerContainer}>
			<div className="flex flex-col gap-y-5">
				<p className="text-white text-xl">
					닷팜에서
					<br />
					<b>
						못챙겼던 지원사업부터
						<br />
						모든 소식을 전해드립니다
					</b>
				</p>
				<Link
					href={KAKAO_OPEN_CHAT_LINK}
					className={openchatButtonStyle}
					target="_blank"
				>
					<KakaoBubble width={17} height={17} />
					<p>{`닷팜 단톡 가기 >`} </p>
				</Link>
			</div>
		</div>
	);
}
// style
const bannerContainer = clsx('bg-[#4b55a7] flex rounded-30 p-30px');
const openchatButtonStyle = clsx(
	'bg-[#F7E600] rounded-full flexCenter gap-x-2.5 px-5 py-2',
	'text-[#3A1D1D] font-bold text-xs'
);

'use client';
import { useCopyUrl } from '@/hooks/useCopyUrl';
import IcLink from '@/../public/icon/link.svg';

export default function SupportCopyUrlButton() {
	const { copyCurrentUrlToClipboard } = useCopyUrl();
	return (
		<button
			className="flexCenter gap-x-2.5  text-subText flex-1 "
			onClick={copyCurrentUrlToClipboard}
		>
			<IcLink width="17" height="17" stroke="#7D7B7B" strokeWidth="1.5" />
			<p className="text-subText font-bold text-xs">공유하기</p>
		</button>
	);
}

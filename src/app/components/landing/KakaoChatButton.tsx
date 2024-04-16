'use client';
import { KAKAO_OPEN_CHAT_LINK } from '@/constants/link';
import Link from 'next/link';
import { ReactNode } from 'react';

type KakaoChatButtonProps = {
	className?: string;
	children?: ReactNode;
};
export function KakaoChatButton({ className, children }: KakaoChatButtonProps) {
	const openKakaoChat = () => {
		window.open(KAKAO_OPEN_CHAT_LINK, '_blank');
	};

	return (
		<Link
			href={KAKAO_OPEN_CHAT_LINK}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
		>
			{children || '오픈 채팅방 이동'}
		</Link>
	);
}

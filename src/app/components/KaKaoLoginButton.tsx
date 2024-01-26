'use client';
import { KAKAO_OPEN_CHAT_LINK } from '@/constants/link';
import { KAKAO_AUTH_URL } from '@/utils/kakao';
import Link from 'next/link';
import Router from 'next/router';
import { ReactNode } from 'react';

type KakaoChatButtonProps = {
	className?: string;
	children?: ReactNode;
};
export function KaKaoLoginButton({
	className,
	children,
}: KakaoChatButtonProps) {
	return (
		<Link className={className} href={KAKAO_AUTH_URL}>
			{children || '카카오 로그인'}
		</Link>
	);
}

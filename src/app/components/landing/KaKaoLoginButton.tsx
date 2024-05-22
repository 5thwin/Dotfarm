'use client';
import { KAKAO_AUTH_URL } from '@/utils/kakao';
import Link from 'next/link';
import { ReactNode, useEffect } from 'react';

type KakaoChatButtonProps = {
	className?: string;
	children?: ReactNode;
	returnUrl?: string;
};
export function KaKaoLoginButton({
	className,
	children,
	returnUrl,
}: KakaoChatButtonProps) {
	useEffect(() => {
		returnUrl && sessionStorage.setItem('returnUrl', returnUrl);
	}, [returnUrl]);
	return (
		<Link className={className} href={KAKAO_AUTH_URL}>
			{children || '카카오 로그인'}
		</Link>
	);
}

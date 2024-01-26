'use client';

import { getKakaoLogin } from '@/api/auth/kakao';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
export default function KaKaoLoginPage() {
	const searchParams = useSearchParams();
	const authCode = searchParams.get('code');
	const getTokens = async () => {
		if (!authCode) return;
		const data = await getKakaoLogin(authCode);
		console.log(data);
	};
	useEffect(() => {
		getTokens();
	}, [getTokens]);
	return (
		<div>
			<p>로그인 중입니다.</p>
			<p>{authCode}</p>
		</div>
	);
}

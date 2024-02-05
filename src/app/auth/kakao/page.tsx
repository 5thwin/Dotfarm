'use client';

import { getKakaoLogin } from '@/api/auth/kakao';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
type LoginState = 'pending' | 'failure' | 'success' | 'nonMember';
export default function KaKaoLoginPage() {
	const searchParams = useSearchParams();
	const authCode = searchParams.get('code');
	const [loginStatus, setLoginStatus] = useState<LoginState>('pending');
	const router = useRouter();

	// 카카오 로그인 이후, 이 회원이 dotfarm의 유저인지 회원 여부와, dotfarm에서  발급한 토큰 부여
	// const getAuth = async () => {
	// 	if (!authCode) {
	// 		setLoginStatus('failure');
	// 		return;
	// 	}
	// 	try {
	// 		const data = await getKakaoLogin(authCode);
	// 		if (data?.isUser) {
	// 			// 카카오 인증 후 회원임을 판별

	// 			console.log(data.userInfo.kakao_account.profile.nickname);
	// 			setLoginStatus('success');
	// 		} else {
	// 			// 카카오 인증 후 비회원임을 판결
	// 			setLoginStatus('nonMember');
	// 		}
	// 	} catch (error) {
	// 		console.error(error);
	// 		setLoginStatus('failure');
	// 	}
	// };

	// useEffect(() => {
	// 	getAuth();
	// }, []);

	// // 인증 결과에 따른 분기
	// useEffect(() => {
	// 	if (loginStatus === 'success') {
	// 		router.push('/successPage');
	// 	} else if (loginStatus === 'failure') {
	// 		router.push('/failurePage');
	// 	} else if (loginStatus === 'nonMember') {
	// 		router.push('/signup');
	// 	}
	// }, [loginStatus]);

	return (
		<div>
			<p>code:</p>
			<b>{authCode}</b>
			{/* {loginStatus === 'success' && <p>로그인 성공.</p>}
			{loginStatus === 'pending' && <p>로그인 중입니다.</p>}
			{loginStatus === 'failure' && <p>로그인에 실패했습니다.</p>}
			{loginStatus === 'nonMember' && <p>회원이 아닙니다.</p>} */}
		</div>
	);
}

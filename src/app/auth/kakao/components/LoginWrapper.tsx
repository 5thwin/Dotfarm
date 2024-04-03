'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { setMe } from '@/utils/localstorage';
import { useEffect } from 'react';
import { login } from '@/api/auth/login';
import { getUserById } from '@/api/user/get';

import { decodeJWT } from '@/utils/jwt';

export default function LoginWrapper() {
	const searchParams = useSearchParams();
	// const [userInfo, setUserInfo] = useState();
	// const [loginStatus, setLoginStatus] = useState<LoginState>('pending');
	const router = useRouter();

	useEffect(() => {
		// 카카오 로그인 이후, 이 회원이 dotfarm의 유저인지 회원 여부와, dotfarm에서  발급한 토큰 부여
		const getAuth = async () => {
			const authCode = searchParams.get('code');

			if (!authCode) {
				// setLoginStatus('failure');
				return;
			}
			console.log(authCode);
			try {
				const res = await login(authCode);
				if (!res) {
					// router.push('/401'); // 개발 시 사용자 없음 페이지 (혹은 로그인 할 수 없습니다. 문의해주세요.)
					return;
				}
				// access token에서 user id 가져옴
				const decoded = decodeJWT(res.accessToken);
				const userId = decoded.sub;
				const user = await getUserById(Number(userId));
				if (!user) {
					return;
				}
				console.log(user);
				setMe(user);
				if (user.status === 'INACTIVE') {
					router.push('/signup');
					return;
				}
				router.push('/main');
			} catch (error) {
				console.error(error);
				// setLoginStatus('failure');
			}
		};
		getAuth();
	}, []);
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

	return <div></div>;
}

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { setMe } from '@/utils/localstorage';
import { useEffect } from 'react';
import { login } from '@/api/auth/login';
import { getUserMe } from '@/api/user/get';

import useHandleError from '@/hooks/useHandleError';

export default function LoginWrapper() {
	const searchParams = useSearchParams();
	// const [userInfo, setUserInfo] = useState();
	// const [loginStatus, setLoginStatus] = useState<LoginState>('pending');
	const router = useRouter();
	const { handleError } = useHandleError();
	useEffect(() => {
		// 카카오 로그인 이후, 이 회원이 dotfarm의 유저인지 회원 여부와, dotfarm에서  발급한 토큰 부여
		const getAuth = async () => {
			const authCode = searchParams.get('code');

			if (!authCode) {
				// setLoginStatus('failure');
				return;
			}
			try {
				const res = await login(authCode);
				// access token에서 user id 가져옴
				const user = await getUserMe();
				if (!user) {
					return;
				}
				setMe(user);
				if (user.status === 'INACTIVE') {
					router.replace('/signup');
					return;
				}
				router.replace('/main');
			} catch (error) {
				console.error(error);
				if (error instanceof Error) {
					handleError({
						error,
						defaultHandler: () => router.replace('/login-error'),
					});
				}
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

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="p-8 bg-white shadow-md rounded-lg">
				<div className="flex items-center justify-center mb-6">
					<div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
						<svg
							className="w-8 h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							></path>
						</svg>
					</div>
				</div>
				<p className="text-lg text-gray-700 text-center mb-4">
					로그인 중입니다...
				</p>
				<div className="flex justify-center">
					<div className="w-6 h-6 border-t-2 border-b-2 border-green-500 rounded-full animate-spin"></div>
				</div>
			</div>
		</div>
	);
}

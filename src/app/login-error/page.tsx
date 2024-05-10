import React from 'react';
import { KaKaoLoginButton } from '../components/landing/KaKaoLoginButton';
import Link from 'next/link';
import { KakaoBubble } from '../components/icons/KakaoBubble';

const LoginErrorPage: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center flex flex-col items-center">
				<h1 className="text-xl font-bold text-gray-800 mb-4">
					로그인 오류 발생
				</h1>
				<p className="text-gray-600 mb-6 text-center">
					로그인 과정에서 문제가 발생했습니다.
					<br /> 잠시 후, 다시 시도해 주세요.
				</p>
				<KaKaoLoginButton className="bg-kakaoYellow rounded-xl text-black font-bold flexCenter py-3 px-6">
					<div className="flex gap-x-1">
						<KakaoBubble />
						<span className="text-opacity-85">카카오 로그인</span>
					</div>
				</KaKaoLoginButton>
				<Link
					href={'/main'}
					className="mt-4 text-mainGreen hover:text-green-600 font-bold px-4  transition duration-150 ease-in-out"
					replace
				>
					메인으로 돌아가기
				</Link>
			</div>
		</div>
	);
};

export default LoginErrorPage;

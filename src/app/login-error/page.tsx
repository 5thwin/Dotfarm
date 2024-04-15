'use client';
import React from 'react';
import { KaKaoLoginButton } from '../components/landing/KaKaoLoginButton';
import { useRouter } from 'next/navigation';

const LoginErrorPage: React.FC = () => {
	const router = useRouter();

	// 메인 페이지로 돌아가는 함수
	const handleGoToMain = () => {
		router.push('/');
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
				<h1 className="text-xl font-bold text-gray-800 mb-4">
					로그인 오류 발생
				</h1>
				<p className="text-gray-600 mb-6">
					로그인 과정에서 문제가 발생했습니다. 잠시 후, 다시 시도해 주세요.
				</p>
				<KaKaoLoginButton />
				<button
					className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
					onClick={handleGoToMain}
				>
					메인으로 돌아가기
				</button>
			</div>
		</div>
	);
};

export default LoginErrorPage;

import React from 'react';
import { KaKaoLoginButton } from '../components/landing/KaKaoLoginButton';
import Link from 'next/link';

const LoginErrorPage: React.FC = () => {
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
				<Link
					href={'/main'}
					className="mt-4 bg-mainGreen hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
				>
					메인으로 돌아가기
				</Link>
			</div>
		</div>
	);
};

export default LoginErrorPage;

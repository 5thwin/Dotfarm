import Link from 'next/link';
import React from 'react';

export default function NotSignUp() {
	return (
		<div className="flex flex-col items-center justify-center lg:p-4">
			<div className="bg-white shadow-main rounded-lg p-8 max-w-md w-full">
				<h1 className="text-xl font-bold text-center text-gray-800 mb-4">
					닷팜에 오신 것을 환영합니다!
				</h1>
				<p className="text-gray-600 text-center mb-6">
					회원 가입 절차를 아직 마치지 않으셨네요.
					<br /> 모든 기능을 이용하시려면 회원 가입을 완료해 주세요.
				</p>
				<Link
					href={'/signup'}
					className="bg-mainGreen hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out w-full inline-block text-center"
				>
					회원 가입 하러 가기
				</Link>
			</div>
		</div>
	);
}

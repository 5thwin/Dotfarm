'use client'; // -> error component는 client component여아함

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { mainGreenRoundedButtonStyle } from './styles/common/buttonStyle';
import LogoutButton from './components/button/LogoutButton';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center h-screen p-4">
			<Image
				src={'/notFound/notFound.svg'}
				alt="Not Found"
				width={199}
				height={123}
			/>
			<h1 className="text-2xl font-bold text-mainGreen mt-2">
				어휴, 뭔가 잘못됐어요!
			</h1>
			<p className="text-lg mt-2 text-center">
				요청하신 페이지를 불러오는 데 문제가 생겼습니다.
				<br /> 잠시 후 다시 시도해주세요.
			</p>
			<Link
				href={'/main'}
				replace
				className={clsx(mainGreenRoundedButtonStyle, 'my-2')}
			>
				메인으로 돌아가기
			</Link>
			<LogoutButton />
		</div>
	);
}

import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Fallback: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
			<Image
				src={'/notFound/notFound.svg'}
				alt="Not Found"
				width={199}
				height={123}
			/>
			<h1 className="text-2xl font-bold text-mainGreen mt-2">
				어휴, 뭔가 잘못됐어요!
			</h1>
			<p className="text-lg mt-2 text-center text-subText">
				요청하신 페이지를 불러오는 데 문제가 생겼습니다.
				<br /> 잠시 후 다시 시도해주세요.
			</p>
			<Link
				href={'/'}
				replace
				className={clsx(mainGreenRoundedButtonStyle, 'mt-2')}
			>
				메인으로 돌아가기
			</Link>
		</div>
	);
};

export default Fallback;

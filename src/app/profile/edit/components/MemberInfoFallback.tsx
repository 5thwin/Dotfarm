import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const MemberInfoFallback: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center p-4">
			<Image
				src={'/notFound/notFound.svg'}
				alt="Not Found"
				width={199}
				height={123}
			/>
			<h1 className="text-xl font-bold text-mainGreen mt-2">
				회원 정보 조회 불가
			</h1>
			<p className="text-lg my-2 text-center">
				사용자 정보를 불러올 수 없어요.
				<br /> 로그인을 다시 해도 문제가 지속된다면 <br />
				고객 지원팀에 연락 부탁드립니다.
			</p>
			<Link href={'/'} className={mainGreenRoundedButtonStyle} replace>
				<span>메인으로</span>
			</Link>
		</div>
	);
};

export default MemberInfoFallback;

'use client';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

type Props = { className?: string };

const MobileBackButton: FC<Props> = ({ className }) => {
	const router = useRouter();

	return (
		<button
			onClick={() => {
				if (window && window.history.length > 1) {
					router.back();
				} else {
					router.push('/'); // 메인 페이지로 리다이렉트
				}
			}}
			className={clsx('w-[34px] h-[34px] flexCenter', className)}
		>
			<svg
				width="12"
				height="20"
				viewBox="0 0 12 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.5 19L1.5 10L10.5 1"
					stroke="#282828"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
};

export default MobileBackButton;

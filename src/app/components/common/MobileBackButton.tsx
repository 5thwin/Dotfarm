'use client';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const MobileBackButton: FC = () => {
	const router = useRouter();

	return (
		<button
			onClick={() => router.back()}
			className="w-[34px] h-[34px] flexCenter"
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

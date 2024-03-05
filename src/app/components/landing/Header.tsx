'use client';
import { LandingHeaderButtonStyle } from '@/app/styles/common/buttonStyle';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { KaKaoLoginButton } from './KaKaoLoginButton';
export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = throttle(() => {
			setIsScrolled(window.scrollY > 100);
		}, 300);

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			handleScroll.cancel();
		};
	}, []);
	return (
		<nav
			className={clsx(
				'fixed top-0 left-0 right-0 p-5 z-30',
				'flex items-center justify-between transition-colors',
				{ 'bg-white': isScrolled, 'bg-transparent': !isScrolled }
			)}
		>
			<Image
				src="/dotfarm.svg"
				alt="Dotfarm Logo"
				width={100}
				height={24}
				priority
			/>
			<KaKaoLoginButton className={LandingHeaderButtonStyle}>
				<span>{'카카오 로그인'}</span>
			</KaKaoLoginButton>
		</nav>
	);
}

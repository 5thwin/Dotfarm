'use client';

import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import DotfarmLogo from '../../landing/DotfarmLogo';
import { PATH_MAIN, navLinks } from '@/utils/navigation';
import Link from 'next/link';
import { IcSetting } from '../../icons/IcSetting';

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;
		let ticking = false;

		const updateScroll = () => {
			setIsScrolled(window.scrollY > 20);
			ticking = false;
		};

		const handleScroll = () => {
			lastScrollY = window.scrollY;

			if (!ticking) {
				window.requestAnimationFrame(updateScroll);
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={getHeaderContainer(isScrolled)}>
			<div className="flex gap-x-[61px]">
				<Link href={PATH_MAIN}>
					<DotfarmLogo />
				</Link>
				<ul className="flex gap-x-30px items-center">
					{navLinks.map((link) => (
						<li className="font-bold" key={link.path}>
							<Link href={link.path}>{link.name}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="flex gap-x-2.5 items-center">
				{/* <button className="flex items-center">
					<IcSetting />
					<span>설정</span>
				</button> */}
				<button className={loginButtonStyle}>로그인</button>
			</div>
		</header>
	);
};

export default Header;

// style
const getHeaderContainer = (isScrolled: boolean) =>
	clsx(
		'fixed top-0 left-0 w-full h-20',
		'transition-colors duration-[30] ease-in-out',
		'px-10 py-5',
		'flex justify-between items-center',
		'z-30',
		{
			'bg-white shadow-main': isScrolled,
			'bg-transparent': !isScrolled,
		}
	);
const loginButtonStyle = clsx(
	'rounded-full px-15px py-2.5',
	'text-bold text-white bg-mainGreen hover:bg-darkGreen'
);

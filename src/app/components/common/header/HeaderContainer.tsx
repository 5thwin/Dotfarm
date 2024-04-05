'use client';
import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';

type Props = { children: ReactNode };
export default function HeaderContainer({ children }: Props) {
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
	return <header className={getHeaderContainer(isScrolled)}>{children}</header>;
}
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

'use client';
import clsx from 'clsx';
import { ReactNode, useEffect, useState, useCallback } from 'react';

type Props = { children: ReactNode; showOnMobile?: boolean };
export default function HeaderContainer({
	children,
	showOnMobile = false,
}: Props) {
	const [isScrolled, setIsScrolled] = useState(
		() => typeof window !== 'undefined' && window.scrollY > 20
	);

	useEffect(() => {
		const updateScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		const handleScroll = () => {
			window.requestAnimationFrame(updateScroll);
		};

		window.addEventListener('scroll', handleScroll);
		updateScroll(); // 초기 스크롤 위치에 대한 체크를 추가
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const getHeaderContainer = useCallback(
		(isScrolled: boolean) =>
			clsx(
				'fixed top-0 left-0 w-full h-20',
				'transition-colors duration-[30] ease-in-out',
				'px-2.5 lg:px-10 py-5',
				'flex justify-between items-center',
				'z-30',
				{
					'bg-white shadow-main': isScrolled,
					'bg-transparent': !isScrolled,
					'hidden lg:flex': !showOnMobile,
				}
			),
		[]
	);

	return <header className={getHeaderContainer(isScrolled)}>{children}</header>;
}

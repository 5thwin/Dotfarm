'use client';
import clsx from 'clsx';
import { ReactNode } from 'react';
import HeaderSearchArea from './HeaderSearchArea-mobile';
import useMobileSearchStore from '@/store/mobileSearchStore';

type Props = { children: ReactNode; showOnMobile?: boolean };
export default function HeaderContainer({
	children,
	showOnMobile = false,
}: Props) {
	const headerContainer = clsx(
		'absolute top-0 left-0 right-0 w-full h-20',
		'px-2.5 lg:px-10 py-5',
		'flex justify-between items-center',
		'z-30',
		'bg-white shadow-main',
		{
			'hidden lg:flex': !showOnMobile,
		}
	);

	const { isShow } = useMobileSearchStore();
	return (
		<header className={headerContainer}>
			{children}
			{isShow && <HeaderSearchArea />}
		</header>
	);
}

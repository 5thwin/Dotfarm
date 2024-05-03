'use client';
import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = { children: ReactNode; showOnMobile?: boolean };
export default function HeaderContainer({
	children,
	showOnMobile = false,
}: Props) {
	const headerContainer = clsx(
		'fixed top-0 left-0 w-full h-20',
		'transition-colors duration-[30] ease-in-out',
		'px-2.5 lg:px-10 py-5',
		'flex justify-between items-center',
		'z-30',
		'bg-white shadow-main',
		{
			'hidden lg:flex': !showOnMobile,
		}
	);

	return <header className={headerContainer}>{children}</header>;
}

'use client';

import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import DotfarmLogo from '../../landing/DotfarmLogo';
import { PATH_MAIN, navLinks } from '@/utils/navigation';
import Link from 'next/link';

const MainHeaderMobile: React.FC = () => {
	return (
		<header className={headerContainer}>
			<div className="flex">
				<Link href={PATH_MAIN}>
					<DotfarmLogo />
				</Link>
			</div>
			<button className={loginButtonStyle}>로그인</button>
		</header>
	);
};

export default MainHeaderMobile;

// style
const headerContainer = clsx(
	'w-full h-[42px]',
	'flex justify-between items-center',
	'z-10'
);
const loginButtonStyle = clsx(
	'rounded-full px-15px py-2.5',
	'text-bold text-white bg-mainGreen'
);

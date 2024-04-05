import React from 'react';
import DotfarmLogo from '../../landing/DotfarmLogo';
import { PATH_MAIN, navLinks } from '@/utils/navigation';
import Link from 'next/link';
import { getMe } from '@/utils/localstorage';
import HeaderUserIcon from './HeaderUserIcon';
import HeaderContainer from './HeaderContainer';
import HeaderUserArea from './HeaderUserArea';

const Header: React.FC = () => {
	return (
		<HeaderContainer>
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
			<HeaderUserArea />
		</HeaderContainer>
	);
};

export default Header;

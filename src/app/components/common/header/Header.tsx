import React from 'react';
import DotfarmLogo from '../../landing/DotfarmLogo';
import { PATH_MAIN, navLinks } from '@/utils/navigation';
import Link from 'next/link';
import HeaderContainer from './HeaderContainer';
import HeaderUserArea from './HeaderUserArea';

type Props = {
	showOnMobile?: boolean;
};
const Header: React.FC<Props> = ({ showOnMobile = false }) => {
	return (
		<HeaderContainer showOnMobile={showOnMobile}>
			<div className="flex gap-x-[61px]">
				<Link href={PATH_MAIN}>
					<DotfarmLogo />
				</Link>
				<ul className="lg:flex gap-x-30px items-center hidden">
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

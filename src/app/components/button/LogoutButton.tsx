'use client';

import { logout } from '@/api/auth/login';
import { removeMe } from '@/utils/localstorage';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type Props = { children?: ReactNode; className?: string };
export default function LogoutButton({ children, className }: Props) {
	const router = useRouter();
	const handleLogout = () => {
		logout();
		removeMe();
		router.push('/main');
	};
	return (
		<button className={className || 'text-subText'} onClick={handleLogout}>
			{children || '로그아웃'}
		</button>
	);
}

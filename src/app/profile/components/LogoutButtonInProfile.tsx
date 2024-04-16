'use client';

import { logout } from '@/api/auth/login';
import { removeMe } from '@/utils/localstorage';
import { useRouter } from 'next/navigation';

export default function LogoutButtonInProfile() {
	const router = useRouter();
	const handleLogout = () => {
		logout();
		removeMe();
		router.push('/main');
	};
	return (
		<button
			className="text-subText lg:text-base text-sm"
			onClick={handleLogout}
		>
			로그아웃
		</button>
	);
}

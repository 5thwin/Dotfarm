'use client';
import { getMe } from '@/utils/localstorage';
import HeaderUserIcon from './HeaderUserIcon';
import clsx from 'clsx';
import { KaKaoLoginButton } from '../../landing/KaKaoLoginButton';
import { UserPartial } from '@/type/user';
import { useEffect, useState } from 'react';

export default function HeaderUserArea() {
	const [me, setMe] = useState<UserPartial | null>(null);
	useEffect(() => {
		setMe(getMe());
	}, []);
	return me ? (
		<HeaderUserIcon me={me} />
	) : (
		<KaKaoLoginButton className={loginButtonStyle}>로그인</KaKaoLoginButton>
	);
}

const loginButtonStyle = clsx(
	'rounded-full px-15px py-2.5',
	'text-bold text-white bg-mainGreen hover:bg-darkGreen'
);

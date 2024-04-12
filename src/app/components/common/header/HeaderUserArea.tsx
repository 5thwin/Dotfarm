'use client';
import { getMe } from '@/utils/localstorage';
import HeaderUserIcon from './HeaderUserIcon';
import clsx from 'clsx';
import { KaKaoLoginButton } from '../../landing/KaKaoLoginButton';

export default function HeaderUserArea() {
	const me = getMe();
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

import HeaderUserIcon from './HeaderUserIcon';
import clsx from 'clsx';
import { KaKaoLoginButton } from '../../landing/KaKaoLoginButton';
import { getUserMe } from '@/api/user/get';

export default async function HeaderUserArea() {
	const me = await getUserMe();
	return me ? (
		<HeaderUserIcon me={me} />
	) : (
		<div>
			<KaKaoLoginButton className={loginButtonStyle}>로그인</KaKaoLoginButton>
		</div>
	);
}

const loginButtonStyle = clsx(
	'rounded-full px-15px py-2.5',
	'text-bold text-white bg-mainGreen hover:bg-darkGreen'
);

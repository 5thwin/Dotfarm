'use server';
import customFetch from '@/api/customFetch';

import {
	getAccessTokenFromCookie,
	removeTokenInCookie,
	setAccessTokenInCookie,
	setRefreshTokenInCookie,
} from './token/utils';
import { decodeJWT } from '@/utils/jwt';

const username = 'hisy2059@naver.com';
const password = '123123';

type LoginResponse = {
	accessToken: string;
	refreshToken: string;
};

export const login = async () => {
	// Basic 인증을 위한 인코딩된 문자열 생성
	const encodedCredentials = btoa(`${username}:${password}`);
	try {
		const res = await customFetch<LoginResponse>('/auth/login/email', {
			method: 'POST',
			headers: {
				Authorization: `Basic ${encodedCredentials}`,
			},
		});
		const { accessToken, refreshToken } = res;
		// 쿠키에 accessToken과 refreshToken을 저장합니다.
		// 쿠키 옵션은 필요에 따라 설정할 수 있습니다.

		setAccessTokenInCookie(accessToken);

		const getAccess = getAccessTokenFromCookie();
		setRefreshTokenInCookie(refreshToken);
		return res;
	} catch (e) {
		console.error(e);
	}
};

export const logout = async () => {
	removeTokenInCookie();
};

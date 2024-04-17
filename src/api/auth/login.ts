'use server';
import customFetch from '@/api/customFetch';

import {
	removeTokenInCookie,
	setAccessTokenInCookie,
	setRefreshTokenInCookie,
} from './token/utils';

type LoginResponse = {
	accessToken: string;
	refreshToken: string;
};

export const login = async (code: string) => {
	// Basic 인증을 위한 인코딩된 문자열 생성
	const params = new URLSearchParams({ code });
	const queryString = params.toString();

	const res = await customFetch<LoginResponse>(
		`/auth/oauth/callback?${queryString}`,
		{
			method: 'GET',
		}
	);
	const { accessToken, refreshToken } = res;
	// 쿠키에 accessToken과 refreshToken을 저장합니다.
	await setAccessTokenInCookie(accessToken);
	await setRefreshTokenInCookie(refreshToken);
	return res;
};

export const logout = async () => {
	removeTokenInCookie();
};

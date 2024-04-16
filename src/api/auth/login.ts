'use server';
import customFetch from '@/api/customFetch';

import {
	getAccessTokenFromCookie,
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
	// 쿠키 옵션은 필요에 따라 설정할 수 있습니다.

	setAccessTokenInCookie(accessToken);

	const getAccess = getAccessTokenFromCookie();
	setRefreshTokenInCookie(refreshToken);
	return res;
};

export const logout = async () => {
	removeTokenInCookie();
};

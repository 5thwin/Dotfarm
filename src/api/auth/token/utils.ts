'use server';

import { COOKIE_KEY_ACCESS, COOKIE_KEY_REFRESH } from '@/api';
import { decodeJWT } from '@/utils/jwt';
import { cookies } from 'next/headers';

export const setAccessTokenInCookie = (accessToken: string) =>
	cookies().set(COOKIE_KEY_ACCESS, accessToken, {
		httpOnly: true,
		sameSite: 'strict',
		path: '/',
	});
export const setRefreshTokenInCookie = (refreshToken: string) =>
	cookies().set(COOKIE_KEY_REFRESH, refreshToken, {
		httpOnly: true,
		sameSite: 'strict',
		path: '/',
	});
export const getAccessTokenFromCookie = () =>
	cookies().get(COOKIE_KEY_ACCESS)?.value;
export const getRefreshTokenFromCookie = () =>
	cookies().get(COOKIE_KEY_REFRESH)?.value;
export const removeTokenInCookie = () => {
	cookies().delete(COOKIE_KEY_ACCESS);
	cookies().delete(COOKIE_KEY_REFRESH);
};

export const getUserIdByAccessToken = () => {
	const accessToken = getAccessTokenFromCookie();

	return accessToken && decodeJWT(accessToken).sub;
};

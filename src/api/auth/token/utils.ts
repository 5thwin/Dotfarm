'use server';

import { COOKIE_KEY_ACCESS, COOKIE_KEY_REFRESH } from '@/api';
import { cookies } from 'next/headers';

export const getAccessTokenFromCookie = () =>
	cookies().get(COOKIE_KEY_ACCESS)?.value;
export const getRefreshTokenFromCookie = () =>
	cookies().get(COOKIE_KEY_REFRESH)?.value;
export const removeTokenInCookie = () => {
	cookies().delete(COOKIE_KEY_ACCESS);
	cookies().delete(COOKIE_KEY_REFRESH);
};

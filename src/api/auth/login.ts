'use server';
import customFetch from '@/api/customFetch';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { COOKIE_KEY_ACCESS, COOKIE_KEY_REFRESH } from '..';
import {
	removeTokenInCookie,
	setAccessTokenInCookie,
	setRefreshTokenInCookie,
} from './token/utils';

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
		setRefreshTokenInCookie(refreshToken);
		return res;
	} catch (e) {
		console.error(e);
	}
};

export const logout = async () => {
	removeTokenInCookie();
};

'use server';
import customFetch from '@/api/customFetch';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// 로그인 관련 테스트 함수
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
		// NextResponse 객체를 생성합니다.
		const response = NextResponse.next();
		// 쿠키에 accessToken과 refreshToken을 저장합니다.
		// 쿠키 옵션은 필요에 따라 설정할 수 있습니다.
		response.cookies.set('accessToken', accessToken, {
			httpOnly: true,
			sameSite: 'strict',
			path: '/',
		});
		response.cookies.set('refreshToken', refreshToken, {
			httpOnly: true,
			sameSite: 'strict',
			path: '/',
		});

		return res;
	} catch (e) {
		console.error(e);
	}
};

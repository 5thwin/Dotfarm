'use server';
import customFetch from '@/api/customFetch';

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

		return res;
	} catch (e) {
		console.error(e);
	}
};

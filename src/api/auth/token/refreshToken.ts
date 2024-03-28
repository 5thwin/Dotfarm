import { baseUrl } from '@/api';
import HttpError from '@/utils/error/httpError';
import { cookies } from 'next/headers';
import { getRefreshTokenFromCookie } from './utils';

//refresh token을 이용하여 새로운 access token을 발급받음
export async function refreshAccessToken() {
	// 리프레시 토큰을 사용하여 새 액세스 토큰을 요청하는 로직
	const refreshUrl = `${baseUrl}/auth/token/access`;
	const refreshToken = getRefreshTokenFromCookie();
	if (!refreshToken) {
		alert('다시 로그인해주세요.');
		return;
	}
	const refreshResponse = await fetch(refreshUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${refreshToken}`,
		},
	});
	const data = await refreshResponse.json();
	if (refreshResponse.status === 401) {
		//유효하지 않은 refreshToken
		throw new HttpError(
			refreshResponse.status,
			`${refreshResponse.status} ${refreshResponse.statusText} `
		);
	}
	if (!refreshResponse.ok) {
		throw new Error(
			`Unable to refresh access token. ${refreshResponse.status} ${refreshResponse.statusText}`
		);
	}
	return data.accessToken as string; // 갱신된 액세스 토큰 반환
}

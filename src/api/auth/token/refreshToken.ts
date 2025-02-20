'use server';
import { baseUrl } from '@/api';
import HttpError from '@/utils/error/httpError';
import {
	getRefreshTokenFromCookie,
	setAccessTokenInCookie,
	setRefreshTokenInCookie,
} from './utils';

//refresh token을 이용하여 새로운 access token을 발급받음
export async function refreshAccessToken() {
	// 리프레시 토큰을 사용하여 새 액세스 토큰을 요청하는 로직
	const refreshAccessUrl = `${baseUrl}/auth/token/access`;
	const refreshToken = getRefreshTokenFromCookie();
	if (!refreshToken) {
		throw new Error(`Unable to access refreshToken`);
	}
	const refreshResponse = await fetch(refreshAccessUrl, {
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
	const newAccessToken = data.accessToken as string;
	setAccessTokenInCookie(newAccessToken);

	return newAccessToken; // 갱신된 액세스 토큰 반환
}

//refresh token을 이용하여 새로운 refresh token을 발급받음
export async function refreshRefreshToken() {
	// 리프레시 토큰을 사용하여 새 액세스 토큰을 요청하는 로직
	const refreshRefreshUrl = `${baseUrl}/auth/token/refresh`;
	const refreshToken = getRefreshTokenFromCookie();
	if (!refreshToken) {
		throw new Error(`Unable to access refreshToken`);
	}
	const refreshResponse = await fetch(refreshRefreshUrl, {
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
			`Unable to refresh token. ${refreshResponse.status} ${refreshResponse.statusText}`
		);
	}
	const newRefreshToken = data.refreshToken as string;
	setRefreshTokenInCookie(newRefreshToken);

	return newRefreshToken; // 갱신된 액세스 토큰 반환
}

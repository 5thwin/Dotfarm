'use server';

import HttpError, {
	ErrorResponse,
	isErrorObject,
} from '@/utils/error/httpError';
import { baseUrl } from '.';
import {
	refreshAccessToken,
	refreshRefreshToken,
} from './auth/token/refreshToken';
import safeJsonParse from '@/utils/safeJsonParse';

async function customFetch<T>(
	endpoint: string,
	config: RequestInit = {},
	isMultipart: boolean = false
): Promise<T> {
	const url = `${baseUrl}${endpoint}`;

	// 헤더 초기화
	const headers = new Headers({
		'Content-Type': 'application/json', // JSON 형태의 데이터를 전송한다고 명시
		...config.headers,
	});
	if (isMultipart) {
		headers.delete('Content-Type');
	}
	const newConfig = { ...config, headers };
	// 요청 인터셉터 로직을 여기에 추가
	let response = await fetch(url, newConfig);

	if (response.status === 401) {
		// 액세스 토큰 갱신 시도
		const newAccessToken = await refreshAccessToken();
		// await refreshRefreshToken();
		if (!newAccessToken)
			throw new HttpError(401, `401: Unable to get a new Access token.`);
		// 헤더에 갱신된 액세스 토큰 추가
		newConfig.headers.set('Authorization', `Bearer ${newAccessToken}`);

		// 요청을 다시 시도
		response = await fetch(url, newConfig);
	}

	if (!response.ok) {
		const errorText = await response.text();
		const { data: errorObject } = safeJsonParse<ErrorResponse>(errorText);
		if (isErrorObject(errorObject)) {
			throw new Error(JSON.stringify(errorObject));
		}

		throw new Error(
			`Error ${response.status} ${response.statusText} ${errorText}`
		);
	}

	// 응답 인터셉터 로직을 여기에 추가
	return response.json() as Promise<T>;
}

export default customFetch;

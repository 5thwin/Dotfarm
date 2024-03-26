import { baseUrl } from '.';
import { refreshAccessToken } from './auth/token/refreshToken';

async function customFetch<T>(
	endpoint: string,
	config: RequestInit = {}
): Promise<T> {
	const url = `${baseUrl}${endpoint}`;

	// 헤더 초기화
	const headers = new Headers({
		'Content-Type': 'application/json', // JSON 형태의 데이터를 전송한다고 명시
		...config.headers,
	});
	const newConfig = { ...config, headers };
	// 요청 인터셉터 로직을 여기에 추가
	let response = await fetch(url, newConfig);

	if (response.status === 401) {
		// 액세스 토큰 갱신 시도
		const newAccessToken = await refreshAccessToken();

		// 헤더에 갱신된 액세스 토큰 추가
		newConfig.headers.set('Authorization', `Bearer ${newAccessToken}`);

		// 요청을 다시 시도
		response = await fetch(url, newConfig);
	}
	if (!response.ok) {
		console.error(response);
		throw new Error(`Error ${response.status} ${response.statusText}`);
	}

	// 응답 인터셉터 로직을 여기에 추가
	return response.json() as Promise<T>;
}

export default customFetch;

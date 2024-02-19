const baseUrl = 'http://localhost:3004';

async function customFetch<T>(
	endpoint: string,
	config: RequestInit
): Promise<T> {
	const url = `${baseUrl}${endpoint}`;
	// 요청 인터셉터 로직을 여기에 추가
	const response = await fetch(url, config);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	// 응답 인터셉터 로직을 여기에 추가
	return response.json() as Promise<T>;
}

export default customFetch;

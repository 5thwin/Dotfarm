const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL;

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
	const response = await fetch(url, newConfig);
	console.log(response);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	// 응답 인터셉터 로직을 여기에 추가
	return response.json() as Promise<T>;
}

export default customFetch;

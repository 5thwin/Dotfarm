const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL;

export async function refreshToken(): Promise<string> {
	// Refresh 토큰을 사용하여 새로운 액세스 토큰을 요청하는 API를 호출합니다.
	const refreshResponse = await fetch(`${baseUrl}/auth/token/access`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// 필요한 경우 Refresh 토큰을 Header에 추가
		},
		// body: JSON.stringify({ refreshToken: 'YOUR_REFRESH_TOKEN' }),
	});
	if (!refreshResponse.ok) {
		throw new Error('Failed to refresh token');
	}
	const data = await refreshResponse.json();
	return data.accessToken; // 새로운 액세스 토큰 반환
}

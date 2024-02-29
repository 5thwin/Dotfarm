// URL에서 도메인 이름을 추출하는 함수
export const getDomain = (url: string): string => {
	try {
		const { hostname } = new URL(url);
		return hostname;
	} catch (error) {
		console.error('Invalid URL');
		return '';
	}
};

// 문자열을 도메인 형식으로 변환하는 함수
export const ensureDomainFormat = (input: string): string => {
	// 이미 'http://' 또는 'https://'로 시작하는 경우, 그대로 반환
	if (/^(http:\/\/|https:\/\/)/.test(input)) {
		return input;
	} else {
		// 프로토콜이 없는 경우, 'https://'를 추가
		return `https://${input}`;
	}
};

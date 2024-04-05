// src/utils/safeJsonParse.ts
type ParseResult<T> = {
	data?: T;
	error?: Error;
};

function safeJsonParse<T>(jsonString: string): ParseResult<T> {
	try {
		const data: T = JSON.parse(jsonString);
		return { data };
	} catch (error) {
		if (error instanceof Error) {
			console.error('JSON parsing error:', error.message);
			// 실제 애플리케이션에서는 적절한 에러 처리 로직을 구현하세요.
			// 예를 들어, 사용자에게 알림을 보내거나, 로깅 서비스에 에러를 기록할 수 있습니다.
			return { error };
		}
		// 예상치 못한 에러 유형
		return {
			error: new Error('An unexpected error occurred during JSON parsing'),
		};
	}
}

export default safeJsonParse;

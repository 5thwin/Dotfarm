class HttpError extends Error {
	statusCode: number;

	constructor(statusCode: number, message: string) {
		super(message); // 부모 클래스의 생성자를 호출하여 메시지를 전달
		this.statusCode = statusCode;
		this.name = 'HttpError'; // 에러 이름 설정
	}
}
export default HttpError;

export interface ErrorResponse {
	message: string;
	error: string;
	statusCode: number;
}
// ErrorResponse 타입 가드
export function isErrorObject(obj: any): obj is ErrorResponse {
	// obj가 null 또는 undefined가 아니고, 타입이 'object'이며, Array가 아닌 경우에만 검사를 진행
	if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
		return 'message' in obj && 'error' in obj && 'statusCode' in obj;
	}
	return false;
}

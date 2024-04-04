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
	return 'message' in obj && 'error' in obj && 'statusCode' in obj;
}

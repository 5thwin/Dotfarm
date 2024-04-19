import { ErrorResponse } from '@/utils/error/httpError';
import safeJsonParse from '@/utils/safeJsonParse';

export function handleApiError(error: any) {
	if (error instanceof Error) {
		if (error.message.includes('401')) {
			return {
				message: 'Unauthorized access. Please log in again.',
				statusCode: 401,
				error: 'Unauthorized',
			};
		}
		const { data: errorObject } = safeJsonParse<ErrorResponse>(error.message);
		if (errorObject) {
			return errorObject;
		}
	}

	// 401 권한 에러 처리

	return {
		message: 'An unexpected error occurred',
		statusCode: 500,
		error: 'Error',
	};
}

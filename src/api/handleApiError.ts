import { ErrorResponse } from '@/utils/error/httpError';
import safeJsonParse from '@/utils/safeJsonParse';

export function handleApiError(error: any) {
	if (error instanceof Error) {
		const { data: errorObject } = safeJsonParse<ErrorResponse>(error.message);
		if (errorObject) {
			return errorObject;
		}
	}
	return {
		message: 'An unexpected error occurred',
		statusCode: 500,
		error: 'Error',
	};
}

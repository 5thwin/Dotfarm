'use server';
import customFetch from '../customFetch';
import { getAccessTokenFromCookie } from '../auth/token/utils';
import { handleApiError } from '../handleApiError';

interface Response {
	fileName: string;
}
export async function saveTempImage(formData: FormData) {
	const accessToken = getAccessTokenFromCookie();
	// FormData의 key 확인

	try {
		const res = await customFetch<Response>(
			`/common/image`,
			{
				method: 'POST',
				body: formData,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
			true
		);
		return res;
	} catch (error) {
		return handleApiError(error);
	}
}

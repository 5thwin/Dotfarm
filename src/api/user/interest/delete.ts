'use server';

import {
	getAccessTokenFromCookie,
	getUserIdByAccessToken,
} from '@/api/auth/token/utils';
import customFetch from '@/api/customFetch';
import { handleApiError } from '@/api/handleApiError';
import { revalidateTag } from 'next/cache';

type Payload = {
	supportId: number;
};
export async function deleteMyInterest(payload: Payload) {
	const { supportId } = payload;
	const userId = getUserIdByAccessToken();

	revalidateTag(`interest`);
	revalidateTag(`interest${supportId}`);
	const accessToken = getAccessTokenFromCookie();

	try {
		const res = await customFetch<boolean>(
			`/users/${userId}/interest/${supportId}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return res;
	} catch (error) {
		return handleApiError(error);
	}
}

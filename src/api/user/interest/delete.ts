'use server';

import {
	getAccessTokenFromCookie,
	getUserIdByAccessToken,
} from '@/api/auth/token/utils';
import customFetch from '@/api/customFetch';
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
}

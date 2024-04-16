'use server';

import {
	getAccessTokenFromCookie,
	getUserIdByAccessToken,
} from '@/api/auth/token/utils';
import customFetch from '@/api/customFetch';
import { revalidateTag } from 'next/cache';

type Payload = {
	postId: number;
};
export async function deleteMyLike(payload: Payload) {
	const { postId } = payload;
	const userId = getUserIdByAccessToken();

	revalidateTag(`post_like`);
	revalidateTag(`post_like${postId}`);
	const accessToken = getAccessTokenFromCookie();

	const res = await customFetch<boolean>(`/users/${userId}/likes/${postId}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	return res;
}

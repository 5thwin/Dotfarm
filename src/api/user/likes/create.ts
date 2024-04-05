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
type Response = {
	author: {
		id: number;
	};
	post: {
		id: number;
	};
	id: number;
	updatedAt: string;
	createdAt: string;
};

export async function createMyLikes(payload: Payload) {
	const { postId } = payload;
	const userId = getUserIdByAccessToken();
	if (!userId) return;
	revalidateTag('post_like');
	revalidateTag(`post_like${postId}`);

	const accessToken = getAccessTokenFromCookie();

	const res = await customFetch<Response>(`/users/${userId}/likes/${postId}`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	return res;
}

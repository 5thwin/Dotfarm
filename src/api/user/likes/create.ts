'use server';

import {
	getAccessTokenFromCookie,
	getUserIdByAccessToken,
} from '@/api/auth/token/utils';
import customFetch from '@/api/customFetch';
import { revalidateTag } from 'next/cache';

type payload = {
	// orderCreatedAt?: 'ASC' | 'DESC';
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

export async function createMyLikes(payload: payload) {
	const params = new URLSearchParams();
	const { postId } = payload;
	const queryString = params.toString(); // 유효한 값들로만 구성된 queryString
	const userId = getUserIdByAccessToken();
	revalidateTag('post_like');

	const accessToken = getAccessTokenFromCookie();

	const res = await customFetch<Response>(
		`/users/${userId}/likes/${postId}?${queryString}`,
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);
	return res;
}

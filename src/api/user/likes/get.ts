'use server';

import { PaginateResponse } from '@/api';
import customFetch from '@/api/customFetch';
import { PostLike } from '@/type/like';
import { getUserIdByAccessToken } from '@/api/auth/token/utils';

type payload = {
	// orderCreatedAt?: 'ASC' | 'DESC';
	page?: number;
	take?: number;
};
export async function getMyLikes(payload?: payload) {
	const params = new URLSearchParams();
	if (payload) {
		const { page, take } = payload;
		if (take) params.append('take', take.toString());
		if (page) params.append('page', page.toString());
	}
	const queryString = params.toString(); // 유효한 값들로만 구성된 queryString
	const userId = getUserIdByAccessToken();
	if (!userId) return null;
	try {
		const res = await customFetch<PaginateResponse & { data: PostLike[] }>(
			`/users/${userId}/likes?${queryString}`,
			{
				method: 'GET',
				next: { revalidate: 10, tags: [`post_like`] },
			}
		);
		return res;
	} catch (error) {
		return null;
	}
}

export async function getLikesCheck(postId: number) {
	// /users/:userId/likes/:postId/check
	const userId = getUserIdByAccessToken();
	if (!userId) return { isLiked: false };
	try {
		const res = await customFetch<{ isLiked: boolean }>(
			`/users/${userId}/likes/${postId}/check`,
			{
				method: 'GET',
				next: { revalidate: 10, tags: [`post_like${postId}`] },
			}
		);
		return res;
	} catch (error) {
		return { isLiked: false };
	}
}

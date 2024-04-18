'use server';

import { revalidateTag } from 'next/cache';
import customFetch from '../customFetch';
import { getAccessTokenFromCookie } from '../auth/token/utils';
import { handleApiError } from '../handleApiError';
type Response = {
	id: number;
	updatedAt: string;
	createdAt: string;
	title: string;
	content: string;
	likeCount: number;
	commentCount: number;
	category: string;
};

export async function patchPost(
	id: number,
	title?: string,
	content?: string,
	category?: string,
	contentImageURL?: string
) {
	const body = {
		title,
		content,
		category,
		contentImageURL,
		//아래 내용은 로직 변경 필요
		// userId: 1,
		// createdAt: '2023-06-02 05:53:13',
		// updatedAt: '2024-02-27 05:53:13',
		// region1: '인천광역시',
		// region2: '남동구',
	};
	try {
		revalidateTag('posts');
		const accessToken = getAccessTokenFromCookie();

		const res = await customFetch<Response>(`/posts/${id}`, {
			method: 'PATCH',
			body: JSON.stringify(body),
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return res;
	} catch (e) {
		return handleApiError(e);
	}
}

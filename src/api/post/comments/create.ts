'use server';

import { getAccessTokenFromCookie } from '@/api/auth/token/utils';
import customFetch from '@/api/customFetch';
import { handleApiError } from '@/api/handleApiError';
import { revalidateTag } from 'next/cache';

type Response = {
	id: number;
	comment: string;
	parentId: number; //부모 댓글이 없으면 0
	likeCount: number;
	author: {
		id: number;
		nickname: string;
		profileImageURL: string | null;
		majorCrops: string | null;
		region: string | null;
		subRegion: string | null;
		farmingExperience: string;
	};
	post: {
		id: number;
	};
	updatedAt: string;
	createdAt: string;
};

export async function createComment(
	postId: number,
	comment: string,
	parentId: number = 0
) {
	const body = {
		comment,
		parentId,
	};
	try {
		const accessToken = getAccessTokenFromCookie();
		revalidateTag(`comments${postId}`);
		const res = await customFetch<Response>(`/posts/${postId}/comments`, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return res;
	} catch (error) {
		return handleApiError(error);
	}
}

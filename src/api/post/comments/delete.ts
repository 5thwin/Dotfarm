// /posts/:postId/comments/:commentId
'use server';
import { getAccessTokenFromCookie } from '@/api/auth/token/utils';
import customFetch from '@/api/customFetch';
import { handleApiError } from '@/api/handleApiError';
import { revalidateTag } from 'next/cache';

export async function deleteComment(postId: number, commentId: number) {
	try {
		const accessToken = getAccessTokenFromCookie();

		revalidateTag(`comments${postId}`);
		const res = await customFetch(`/posts/${postId}/comments/${commentId}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return res;
	} catch (error) {
		return handleApiError(error);
	}
}

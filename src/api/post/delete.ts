'use server';
import { revalidateTag } from 'next/cache';
import customFetch from '../customFetch';
import { getAccessTokenFromCookie } from '../auth/token/utils';
import { handleApiError } from '../handleApiError';

type Payload = {
	postId: number;
};
export async function deletePost({ postId }: Payload) {
	revalidateTag('posts');

	const accessToken = getAccessTokenFromCookie();
	try {
		const res = await customFetch(`/posts/${postId}`, {
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

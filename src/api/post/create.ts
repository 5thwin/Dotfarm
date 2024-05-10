'use server';
import { revalidateTag } from 'next/cache';
import customFetch from '../customFetch';
import { getAccessTokenFromCookie } from '../auth/token/utils';
import { UserPartial } from '@/type/user';
import { handleApiError } from '../handleApiError';

type Response = {
	title: string;
	content: string;
	category: string;
	author: UserPartial;
	images: [
		{
			id: number;
			updatedAt: string;
			createdAt: string;
			order: number;
			type: number;
			path: string;
		}
	];
	contentImageURL: null;
	id: number;
	updatedAt: string;
	createdAt: string; //'2024-03-13T21:01:09.344Z'
};

export async function writePost(
	title: string,
	content: string,
	category: string,
	images?: string[]
) {
	const body = {
		title,
		content,
		category,
		images: images || [],
	};

	revalidateTag('posts');

	const accessToken = getAccessTokenFromCookie();
	try {
		const res = await customFetch<Response>('/posts', {
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

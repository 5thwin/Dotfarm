'use server';
import { revalidateTag } from 'next/cache';
import customFetch from '../customFetch';
import { cookies, headers } from 'next/headers';

type Response = {
	title: string;
	content: string;
	category: string;
	author: {
		id: number;
		nickname: string;
		profileImageURL: string | null;
		majorCrops: string | null;
		region: string | null;
		subRegion: string | null;
		farmingExperience: string;
	};
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
	contentImageURL?: string
	// accessToken?: string
) {
	const body = {
		title,
		content,
		category,
		images: [],
		//아래 내용은 로직 변경 필요
		// userId: 1,
		// createdAt: '2023-06-02 05:53:13',
		// updatedAt: '2024-02-27 05:53:13',
		// region1: '인천광역시',
		// region2: '남동구',
	};

	revalidateTag('posts');

	const accessToken = cookies().get('accessToken')?.value;

	const res = await customFetch<Response>('/posts', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	return res;
}

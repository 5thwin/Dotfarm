'use server';
import { revalidateTag } from 'next/cache';
import customFetch from '../customFetch';
import { Post } from '@/type/post';

export async function writePost(
	title: string,
	contents: string,
	category: string,
	imageURL?: string
) {
	const body = {
		title,
		contents,
		category,
		imageURL,
		//아래 내용은 로직 변경 필요
		userId: 1,
		createdAt: '2023-06-02 05:53:13',
		updatedAt: '2024-02-27 05:53:13',
		region1: '인천광역시',
		region2: '남동구',
	};
	try {
		revalidateTag('posts');
		const res = await customFetch<Post>('/posts', {
			method: 'POST',
			body: JSON.stringify(body),
		});
		console.log(res);
		return { isSuccess: true, id: res.id };
	} catch (e) {
		console.log('error', e);
		return { isSuccess: false };
	}
}

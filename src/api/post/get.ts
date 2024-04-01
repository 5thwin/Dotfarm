'use server';
import { Post, PostPartial } from '@/type/post';
import customFetch from '../customFetch';

type Response = {
	cursor: { after: null };
	count: number;
	next: null;
	total?: number; // 요청 필드에 page가 들어가는 경우에 생기는 필드
};
type payload = {
	category?: string;
	orderCreatedAt?: 'ASC' | 'DESC';
	page?: number;
	take?: number;
};
export async function getPostsWithAuthor(payload?: payload) {
	const params = new URLSearchParams();
	if (payload) {
		const { category, orderCreatedAt = 'DESC', take, page } = payload;
		// 값이 유효한 경우에만 파라미터를 추가
		params.append('order__createdAt', orderCreatedAt);
		if (category) params.append('where__category', category);
		if (take) params.append('take', take.toString());
		if (page) params.append('page', page.toString());
	}
	const queryString = params.toString(); // 유효한 값들로만 구성된 queryString

	try {
		const res = await customFetch<Response & { data: PostPartial[] }>(
			`/posts?${queryString}`,
			{
				method: 'GET',
				next: { revalidate: 10, tags: ['posts'] },
			}
		);
		return res;
	} catch (e) {
		// 오류 처리
		console.error(e);
	}
}

export async function getPosts(category?: string) {
	const params = new URLSearchParams();
	// 값이 유효한 경우에만 파라미터를 추가
	if (category) params.append('category', category);

	const queryString = params.toString(); // 유효한 값들로만 구성된 queryString

	try {
		const res = await customFetch<Response & { data: Post[] }>(
			`/posts?${queryString}`,
			{
				method: 'GET',
				next: { revalidate: 10, tags: ['posts'] },
			}
		);
		return res;
	} catch (e) {
		// 오류 처리
		console.error(e);
	}
}

export async function getPost(id: number) {
	try {
		const res = await customFetch<Post>(`/posts/${id}`, {
			method: 'GET',
			next: { revalidate: 10, tags: ['posts', `${id}`] },
		});
		return res;
	} catch (e) {
		// 오류 처리
		console.error(e);
	}
}

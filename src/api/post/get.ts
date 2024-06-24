'use server';
import { Post, PostPartial } from '@/type/post';
import customFetch from '../customFetch';
import { PaginateResponse } from '..';

type payload = {
	category?: string;
	orderCreatedAt?: 'ASC' | 'DESC';
	page?: number;
	take?: number;
	keyword?: string;
	authorId?: number;
	where__id__less_than?: number;
	where__id__more_than?: number;
};
export async function getPostsWithAuthor(payload?: payload) {
	const params = new URLSearchParams();
	if (payload) {
		const {
			category,
			orderCreatedAt = 'DESC',
			take,
			page,
			keyword,
			authorId,
			where__id__less_than,
			where__id__more_than,
		} = payload;
		// 값이 유효한 경우에만 파라미터를 추가
		params.append('order__createdAt', orderCreatedAt);
		if (category) params.append('where__category', category);
		if (take) params.append('take', take.toString());
		if (page) params.append('page', page.toString());
		if (keyword) params.append('where__content__i_like', keyword);
		if (authorId) params.append('where__author__id', authorId.toString());
		if (payload.where__id__less_than)
			params.append(
				'where__id__less_than',
				payload.where__id__less_than.toString()
			);
		if (payload.where__id__more_than)
			params.append(
				'where__id__more_than',
				payload.where__id__more_than.toString()
			);
	}
	const queryString = params.toString(); // 유효한 값들로만 구성된 queryString

	try {
		const res = await customFetch<PaginateResponse & { data: PostPartial[] }>(
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
		return;
	}
}

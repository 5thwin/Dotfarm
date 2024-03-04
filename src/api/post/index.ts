import { Post } from '@/type/post';
import customFetch from '../customFetch';
import { User } from '@/type/user';

export interface ExtendedPost extends Post {
	user: User;
}

export async function getPostsWithAuthor(category?: string) {
	const params = new URLSearchParams();

	// 값이 유효한 경우에만 파라미터를 추가
	if (category) params.append('category', category);

	const queryString = params.toString(); // 유효한 값들로만 구성된 queryString

	try {
		const res = await customFetch<ExtendedPost[]>(
			`/posts?${queryString}_embed=user`,
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
		const res = await customFetch<Post[]>(`/posts?${queryString}`, {
			method: 'GET',
			next: { revalidate: 10, tags: ['posts'] },
		});
		return res;
	} catch (e) {
		// 오류 처리
		console.error(e);
	}
}

export async function getPost(id: number) {
	try {
		const res = await customFetch<ExtendedPost[]>(
			`/posts?id=${id}&_embed=user`,
			{
				method: 'GET',
				next: { revalidate: 10, tags: ['post'] },
			}
		);
		return res[0];
	} catch (e) {
		// 오류 처리
		console.error(e);
	}
}

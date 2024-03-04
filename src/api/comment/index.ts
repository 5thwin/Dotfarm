'use server';

import { revalidateTag } from 'next/cache';
import customFetch from '../customFetch';

export async function getComment(postId: number) {
	const params = new URLSearchParams();
}

export async function writeComment(postId: number, contents: string) {
	const body = {
		postId,
		contents,
		userId: 1,
		parentId: null,
	};
	// 실제 api는 요청 시 헤더에 담긴 토큰을 통해서 서버에서 유저정보를 줘야함
	try {
		revalidateTag('posts');

		const res = await customFetch(`/comments`, {
			method: 'POST',
			body: JSON.stringify(body),
		});
		return res;
	} catch (e) {
		// 오류 처리
		console.error(e);
	}
}

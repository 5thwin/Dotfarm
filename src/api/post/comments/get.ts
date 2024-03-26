import customFetch from '@/api/customFetch';
import { Comment } from '@/type/comment';

type Response = {
	data: Comment[];
	cursor: {
		after: null | number;
	};
	count: number;
	next: null | number;
};
export async function getCommentsByPostId(postId: number) {
	try {
		const res = await customFetch<Response>(`/posts/${postId}/comments`, {
			method: 'GET',
			next: { revalidate: 10, tags: ['comments', `${postId}`] },
		});
		return res;
	} catch (e) {
		console.error(e);
	}
}

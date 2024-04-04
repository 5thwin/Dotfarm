'use server';
import { Post } from '@/type/post';
import { getUserIdByAccessToken } from '@/api/auth/token/utils';

export async function ableToEdit(post: Post) {
	const myUserIdString = getUserIdByAccessToken();
	const myUserId = Number(myUserIdString);
	return myUserId === post.author.id;
}

import { Comment } from './comment';
import { User } from './user';

export type Post = {
	id: number | string;
	title: string;
	content: string;
	userId: number;
	contentImageURL: string;
	category: string;
	createdAt: string;
	updatedAt: string;
	region1: string;
	region2: string;
};
export interface PostWithUser extends Post {
	author: User;
}

export interface PostWithComments extends Post {
	comments: Comment[];
}

export interface FullPost extends Post {
	author: User;
	comments: Comment[];
}

// API 응답 타입

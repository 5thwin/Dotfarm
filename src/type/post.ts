import { Comment } from './comment';
import { User } from './user';

export type Post = {
	id: number;
	title: string;
	contents: string;
	userId: number;
	imgURL: string;
	category: string;
	createdAt: string;
	updatedAt: string;
	region1: string;
	region2: string;
};
export interface PostWithUser extends Post {
	user: User;
}

export interface PostWithComments extends Post {
	comments: Comment[];
}

export interface FullPost extends Post {
	user: User;
	comments: Comment[];
}

import { PostPartial } from './post';
import { UserPartial } from './user';

export type PostLike = {
	id: number;
	updatedAt: string;
	createdAt: string;
	author: UserPartial;
	post: PostPartial;
};

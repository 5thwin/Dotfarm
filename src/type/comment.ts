import { UserPartial } from './user';

export interface Comment {
	id: number;
	comment: string;
	parentId: null | number;
	createdAt: string;
	updatedAt: string;
	likeCount: number;
	author: UserPartial;
}

import { UserPartial } from './user';

export interface Comment {
	id: number;
	comment: string;
	parentId: null | number; // parentId > 0 : 부모댓글이 있는 자식 댓글
	createdAt: string;
	updatedAt: string;
	likeCount: number;
	author: UserPartial;
}

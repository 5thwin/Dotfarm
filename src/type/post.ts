import { ImageType } from './image';
import { UserPartial } from './user';

export type Post = {
	id: number;
	updatedAt: string;
	createdAt: string;
	title: string;
	content: string;
	likeCount: number;
	commentCount: number;
	category: string;
	author: UserPartial;
	images: ImageType[];
};

export type PostPartial = Pick<
	Post,
	| 'id'
	| 'updatedAt'
	| 'createdAt'
	| 'title'
	| 'content'
	| 'likeCount'
	| 'commentCount'
	| 'category'
>;

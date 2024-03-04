export interface Comment {
	id: number;
	postId: number;
	contents: string;
	userId: number;
	parentId: null | number;
	createdAt: string;
	updatedAt: string;
}

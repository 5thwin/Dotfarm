export type QNAComment = {
	id: number;
	parentId: null | number;
	userId: number;
	nickname: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	likes: number;
	likedByUser: boolean;
	region: string;
};

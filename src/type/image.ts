export type ImageType = {
	id: number;
	updatedAt: string;
	createdAt: string;
	order: number; //몇번째 이미지인지
	type: number;
	path: string;
};
export type ImageState = {
	url: string;
	state: 'Pending' | 'Complete' | 'Failed';
};

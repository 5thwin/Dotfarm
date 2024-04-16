export type News = {
	id: number;
	title: string;
	publisher: string;
	imgURL: string;
	link: string;
	type: IssueType;
	createdAt: string;
	updatedAt: string;
};

export type IssueType = '뉴스레터' | '영상레터' | string;

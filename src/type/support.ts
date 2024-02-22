export type SupportProgram = {
	programID: number;
	programName: string;
	region1: string;
	region2: string;
	uploadDate: string;
	startDate: string;
	deadline: string;
	recruitmentStatus: '모집중' | '마감' | string;
	category: string;
	link: string;
	content: string;
};

export type PaginatedSupportPrograms = {
	currentPage: number;
	pageSize: number;
	totalPages: number;
	totalItems: number;
	items: SupportProgram[];
};

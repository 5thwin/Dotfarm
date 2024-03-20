export type SupportProgram = {
	id: number;
	programName: string;
	region: string;
	subRegion: string;
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

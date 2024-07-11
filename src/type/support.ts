import { ImageType } from './image';

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
	isInterested?: boolean; //클라이언트에서 추가되는 항목
	ministries: null | string;
	agency: null | string;
	images: ImageType[];
};

export type PaginatedSupportPrograms = {
	currentPage: number;
	pageSize: number;
	totalPages: number;
	totalItems: number;
	items: SupportProgram[];
};

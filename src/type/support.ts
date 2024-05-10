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
};

export type PaginatedSupportPrograms = {
	currentPage: number;
	pageSize: number;
	totalPages: number;
	totalItems: number;
	items: SupportProgram[];
};

/**
 * "support": {
      "id": 1,
      "updatedAt": "2024-04-08T16:32:17.209Z",
      "createdAt": "2024-04-08T16:18:29.110Z",
      "programName": "024년 체류형농업창업지원센터 입교생",
      "region": "경상북도",
      "subRegion": "영천시",
      "uploadDate": "2024-03-25T00:00:00.157Z",
      "startDate": "2024-04-04T00:00:00.157Z",
      "deadline": "2024-04-09T19:00:00.157Z",
      "recruitmentStatus": "모집중",
      "category": "지원사업",
      "link": "https://www.rda.go.kr/young/custom/policy/view.do?sId=11720&cp=1",
      "content": "영농부산물 파쇄 지원단 인건비(3~4인/조), 수거차량 임차비(부산물 수거 및 파쇄기 운반용 차량), 파쇄기 및 운반차량 유류비, 기타(상해보험비, 안전용품 구입비, 폐기물 처리비, 교육비 등)",
      "interestCount": 1
  }
 */

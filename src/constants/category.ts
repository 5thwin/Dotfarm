export const postCategorys = ['일반', '중고', '구인/구직', '질문하기'];
export const isPostCategory = (targetCategory: string) =>
	postCategorys.includes(targetCategory);

export const getCategoryTitle = (category?: string) => {
	switch (category) {
		case '중고':
			return '중고 농기계';
		case '구인/구직':
			return '구인/구직';
		case '질문하기':
			return '질문하기';
		case '일반':
			return '일반';
		default:
			return '영농 커뮤니티';
	}
};

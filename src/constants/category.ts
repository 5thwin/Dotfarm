export const postCategorys = ['일반', '중고', '구인/구직', '질문하기'];
export const isPostCategory = (targetCategory: string) =>
	postCategorys.includes(targetCategory);

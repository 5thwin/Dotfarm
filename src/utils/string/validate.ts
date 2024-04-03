// logic
export const containsSpecialCharacters = (nickname: string): boolean => {
	// 특수문자를 찾는 정규 표현식
	const specialCharRegex = /[^a-zA-Z0-9가-힣]/;

	return specialCharRegex.test(nickname);
};

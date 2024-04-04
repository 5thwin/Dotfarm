import { NicknameValidation } from '@/type/user';

// logic
export const containsSpecialCharacters = (nickname: string): boolean => {
	// 특수문자를 찾는 정규 표현식
	const specialCharRegex = /[^a-zA-Z0-9가-힣]/;

	return specialCharRegex.test(nickname);
};

export const validateNickName = (nickname: string): NicknameValidation => {
	if (nickname.length < 2 || nickname.length > 10) {
		return {
			status: 'invalidLength',
			message: '닉네임은 2자 이상 10자 이하로 설정해 주세요.',
		};
	} else if (containsSpecialCharacters(nickname)) {
		return {
			status: 'invalidChar',
			message: '닉네임에는 특수문자를 사용할 수 없습니다. 다시 입력해 주세요.',
		};
	}
	return { status: 'valid', message: '사용 가능한 멋진 닉네임이네요!' };
};

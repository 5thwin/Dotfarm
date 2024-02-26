import { create } from 'zustand';

interface ValidationState {
	isValid: boolean; //2글자 이상 12글자 이내, 특수문자 및 공백 포함하면 안됨,
	// isAvailable: boolean; //중복되지 않은 이름
	shouldCheckDuplicate: boolean; //중복 체크가 필요한지 여부
	setIsValid: (userName: string) => void;
	// setIsAvailable: (_: boolean) => void;
	setShouldCheckDuplicate: (_: boolean) => void;
}

const useValidationStore = create<ValidationState>((set) => ({
	isValid: true,
	// isAvailable: true,
	shouldCheckDuplicate: false,
	setIsValid: (userName) => {
		//공백, 길이 특수문자 확인
		const isValidFormat =
			/^[^\s!@#$%^&*()_+={}\[\]:;"'<,>.?\/\\~`|-]{2,12}$/.test(userName);
		set(() => ({ isValid: isValidFormat }));
	},
	// setIsAvailable: (isAvailable) => set(() => ({ isAvailable })),
	setShouldCheckDuplicate: (shouldCheckDuplicate) =>
		set(() => ({ shouldCheckDuplicate })),
}));

export default useValidationStore;

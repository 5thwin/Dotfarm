import { NicknameValidation, UserPartial } from '@/type/user';
import { validateNickName } from '@/utils/string/validate';
import { create } from 'zustand';

interface NicknameFormState {
	nickname: string;
	originNickname: string;
	nicknameValidation: NicknameValidation;
	setNickname: (_: string) => void;
	setNicknameValidation: (_: NicknameValidation) => void;
	init: (userMe: UserPartial) => void;
}

const useNicknameFormStore = create<NicknameFormState>((set) => ({
	nickname: '',
	originNickname: '',
	nicknameValidation: { status: 'initial', message: '' },
	setNickname: (nickname) =>
		set(() => {
			return {
				nickname,
				nicknameValidation: validateNickName(nickname),
			};
		}),
	setNicknameValidation: (newValidation) =>
		set(() => ({ nicknameValidation: newValidation })),
	init: (userMe) =>
		set(() => ({ nickname: userMe.nickname, originNickname: userMe.nickname })),
}));

export default useNicknameFormStore;

import { FarmExperience, NicknameValidation, UserPartial } from '@/type/user';
import {
	containsSpecialCharacters,
	validateNickName,
} from '@/utils/string/validate';
import { create } from 'zustand';

// 스토어 상태를 위한 인터페이스 정의
interface SignupFormState {
	nickname: string;
	region: string;
	subRegion: string;
	farmingExperience: FarmExperience;
	majorCrops: string;
	nicknameValidation: NicknameValidation;
	updateUser: (user: UserPartial) => void;
	updateNickname: (nickname: string) => void;
	updateRegion: (region: string) => void;
	updateSubRegion: (subRegion: string) => void;
	updateFarmingExperience: (farmingExperience: FarmExperience) => void;
	updateMajorCrops: (majorCrops: string) => void;
	updateNicknameValidation: (_: NicknameValidation) => void;
}

// 스토어 생성
const useSignupFromStore = create<SignupFormState>((set) => ({
	nickname: '',
	isValidNickName: false,
	region: '',
	subRegion: '',
	farmingExperience: '귀농에 관심있음',
	majorCrops: '',
	nicknameValidation: { status: 'initial', message: '' },
	updateNicknameValidation: (vicknameValidation) =>
		set(() => ({ nicknameValidation: vicknameValidation })),
	updateUser: (user) =>
		set((prev) => {
			const { nickname, region, subRegion, farmingExperience, majorCrops } =
				user;
			const newState = { ...prev };
			if (nickname) {
				newState.nickname = nickname;
				newState.nicknameValidation = validateNickName(nickname);
			}
			if (region) newState.region = region;
			if (subRegion) newState.subRegion = subRegion;
			if (farmingExperience) newState.farmingExperience = farmingExperience;
			if (majorCrops) newState.majorCrops = majorCrops;

			return newState;
		}),
	updateNickname: (nickname) =>
		set(() => {
			return {
				nickname,
				nicknameValidation: validateNickName(nickname),
			};
		}),

	updateRegion: (region) => set(() => ({ region })),
	updateSubRegion: (subRegion) => set(() => ({ subRegion })),
	updateFarmingExperience: (farmingExperience) =>
		set(() => ({ farmingExperience })),
	updateMajorCrops: (majorCrops) => set(() => ({ majorCrops })),
}));

export default useSignupFromStore;

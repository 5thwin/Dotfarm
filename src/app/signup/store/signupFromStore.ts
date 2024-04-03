import { FarmExperience, UserPartial } from '@/type/user';
import { containsSpecialCharacters } from '@/utils/string/validate';
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
}

type NicknameValidationStatus =
	| 'duplicate' // 중복됨
	| 'invalidLength' // 길이가 부적절함
	| 'invalidChar' // 부적절한 문자 포함
	| 'valid' // 유효함
	| 'initial'; // 초기 상태 혹은 검사 전

// 닉네임 검증 상태를 위한 타입
export type NicknameValidation = {
	status: NicknameValidationStatus;
	message: string;
};

// 스토어 생성
const useSignupFromStore = create<SignupFormState>((set) => ({
	nickname: '',
	isValidNickName: false,
	region: '',
	subRegion: '',
	farmingExperience: '귀농에 관심있음',
	majorCrops: '',
	nicknameValidation: { status: 'initial', message: '' },
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

const validateNickName = (nickname: string): NicknameValidation => {
	if (nickname.length < 2 || nickname.length > 9) {
		return {
			status: 'invalidLength',
			message: '닉네임은 2자 이상 9자 이하로 설정해 주세요.',
		};
	} else if (containsSpecialCharacters(nickname)) {
		return {
			status: 'invalidChar',
			message: '닉네임에는 특수문자를 사용할 수 없습니다. 다시 입력해 주세요.',
		};
	}
	return { status: 'valid', message: '사용 가능한 멋진 닉네임이네요!' };
};

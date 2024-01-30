import create from 'zustand';

// 스토어 상태를 위한 인터페이스 정의
interface SignupFormState {
	nickname: string;
	isValidNickName: boolean;
	region1: string;
	region2: string;
	farmingExperience: string;
	crop: string;
	updateNickname: (nickname: string) => void;
	updateIsValidNickName: (isValid: boolean) => void;
	updateRegion1: (region1: string) => void;
	updateRegion2: (region2: string) => void;
	updateFarmingExperience: (farmingExperience: string) => void;
	updateCrop: (crop: string) => void;
}

// 스토어 생성
const useSignupFromStore = create<SignupFormState>((set) => ({
	nickname: '',
	isValidNickName: false,
	region1: '',
	region2: '',
	farmingExperience: '',
	crop: '',
	updateNickname: (nickname) => set(() => ({ nickname })),
	updateIsValidNickName: (isValid: boolean) =>
		set(() => ({ isValidNickName: isValid })),
	updateRegion1: (region1) => set(() => ({ region1 })),
	updateRegion2: (region2) => set(() => ({ region2 })),
	updateFarmingExperience: (farmingExperience) =>
		set(() => ({ farmingExperience })),
	updateCrop: (crop) => set(() => ({ crop })),
}));

export default useSignupFromStore;

import { create } from 'zustand';

// 스토어 상태를 위한 인터페이스 정의
interface SignupFormState {
	nickname: string;
	isValidNickName: boolean;
	region: string;
	subRegion: string;
	farmingExperience: string;
	crop: string;
	updateNickname: (nickname: string) => void;
	updateIsValidNickName: (isValid: boolean) => void;
	updateRegion: (region: string) => void;
	updateSubRegion: (subRegion: string) => void;
	updateFarmingExperience: (farmingExperience: string) => void;
	updateCrop: (crop: string) => void;
}

// 스토어 생성
const useSignupFromStore = create<SignupFormState>((set) => ({
	nickname: '',
	isValidNickName: false,
	region: '',
	subRegion: '',
	farmingExperience: '',
	crop: '',
	updateNickname: (nickname) => set(() => ({ nickname })),
	updateIsValidNickName: (isValid: boolean) =>
		set(() => ({ isValidNickName: isValid })),
	updateRegion: (region) => set(() => ({ region })),
	updateSubRegion: (subRegion) => set(() => ({ subRegion })),
	updateFarmingExperience: (farmingExperience) =>
		set(() => ({ farmingExperience })),
	updateCrop: (crop) => set(() => ({ crop })),
}));

export default useSignupFromStore;

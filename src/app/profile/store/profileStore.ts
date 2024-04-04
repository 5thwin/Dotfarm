import { UserPartial } from '@/type/user';
import { create } from 'zustand';

// 스토어 상태를 위한 인터페이스 정의
interface ProfileState {
	profileImageURL: string | null;
	region: string | null;
	subRegion: string | null;
	farmingExperience: string | null;
	majorCrops: string | null;
	setProfileImageURL: (_: string) => void;
	setRegion: (_: string) => void;
	setSubRegion: (_: string) => void;
	setFarmingExperience: (_: string) => void;
	setMajorCrops: (_: string) => void;
	init: (userMe: UserPartial) => void;
}

const useProfileStore = create<ProfileState>((set) => ({
	profileImageURL: '',
	region: '',
	subRegion: '',
	farmingExperience: '',
	majorCrops: '',
	setProfileImageURL: (newImgUrl) =>
		set(() => ({ profileImageURL: newImgUrl })),
	setRegion: (region) => set(() => ({ region })),
	setSubRegion: (subRegion) => set(() => ({ subRegion })),
	setFarmingExperience: (farmingExperience) =>
		set(() => ({ farmingExperience })),
	setMajorCrops: (majorCrops) => set(() => ({ majorCrops })),
	init: (userMe) =>
		set(() => ({
			region: userMe.region,
			subRegion: userMe.subRegion,
			farmingExperience: userMe.farmingExperience,
			majorCrops: userMe.majorCrops,
		})),
	originUserName: '',
}));
export default useProfileStore;

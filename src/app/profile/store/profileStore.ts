import { UserMe } from '@/type/user';
import { create } from 'zustand';

// 스토어 상태를 위한 인터페이스 정의
interface ProfileState {
	profileImageURL: string;
	userName: string;
	region: string;
	subRegion: string;
	farmingExperience: string;
	majorCrops: string;
	setProfileImageURL: (_: string) => void;
	setUserName: (_: string) => void;
	setRegion: (_: string) => void;
	setSubRegion: (_: string) => void;
	setFarmingExperience: (_: string) => void;
	setMajorCrops: (_: string) => void;
	init: (userMe: UserMe) => void;
	originUserName: string;
}

const useProfileStore = create<ProfileState>((set) => ({
	profileImageURL: '',
	userName: '',
	region: '',
	subRegion: '',
	farmingExperience: '',
	majorCrops: '',
	setProfileImageURL: (newImgUrl) =>
		set(() => ({ profileImageURL: newImgUrl })),
	setUserName: (userName) => set(() => ({ userName })),
	setRegion: (region) => set(() => ({ region })),
	setSubRegion: (subRegion) => set(() => ({ subRegion })),
	setFarmingExperience: (farmingExperience) =>
		set(() => ({ farmingExperience })),
	setMajorCrops: (majorCrops) => set(() => ({ majorCrops })),
	init: (userMe) =>
		set(() => ({
			profileImageURL: userMe.profileImageURL,
			userName: userMe.userName,
			originUserName: userMe.userName,
			region: userMe.region,
			subRegion: userMe.subRegion,
			farmingExperience: userMe.farmingExperience,
			majorCrops: userMe.majorCrops,
		})),
	originUserName: '',
}));
export default useProfileStore;

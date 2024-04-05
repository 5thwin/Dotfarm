import { getMe } from '@/utils/localstorage';
import { create } from 'zustand';

interface ProfileImageState {
	profileImageURL?: string | null;
	originProfileImageURL?: string | null;
	setProfileImageURL: (_: string) => void;
	setOriginProfileImageURL: (_: string) => void;
}

const useProfileImageStore = create<ProfileImageState>((set) => ({
	profileImageURL: '',
	originProfileImageURL: '',
	setProfileImageURL: (profileImageURL) => set(() => ({ profileImageURL })),
	setOriginProfileImageURL: (originProfileImageURL) =>
		set(() => ({ originProfileImageURL })),
}));

export default useProfileImageStore;

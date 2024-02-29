import { FavoriteSite } from '@/type/me';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface MeState {
	// 자주가는 사이트 관련
	favoriteSites: FavoriteSite[];
	addFavoriteSite: (newSite: FavoriteSite) => void;
	removeFavoriteSite: (index: number) => void;
}

export const useMeStore = create<MeState>()(
	devtools(
		persist(
			(set) => ({
				favoriteSites: [], // 초기 상태
				// 새로운 사이트를 favoriteSites 배열에 추가
				addFavoriteSite: (newSite) =>
					set((state) => ({
						favoriteSites: [...state.favoriteSites, newSite],
					})),

				// index에 해당하는 사이트를 favoriteSites 배열에서 제거
				removeFavoriteSite: (index) =>
					set((state) => ({
						favoriteSites: state.favoriteSites.filter((_, i) => i !== index),
					})),
			}),
			{
				name: 'me', // 로컬 스토리지에 저장될 때 사용될 이름
				storage: createJSONStorage(() => localStorage), // 사용할 스토리지 지정 (여기서는 localStorage 사용)
			}
		)
	)
);

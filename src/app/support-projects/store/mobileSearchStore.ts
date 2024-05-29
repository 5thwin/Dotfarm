import { create } from 'zustand';

// 모바일 상 화면에서 검색 영역을 보여줄지 정함
interface MobileSearch {
	isShow: boolean;
	setIsShow: (_: boolean) => void;
}

const useMobileSearchStore = create<MobileSearch>((set) => ({
	isShow: false,
	setIsShow: (newIsShow) => set(() => ({ isShow: newIsShow })),
}));

export default useMobileSearchStore;

import { create } from 'zustand';

type TabType = 'TOTAL' | 'USED-MACHINERY' | 'QNA';

interface CommunityTab {
	tabType: TabType;
	setTabType: (_: TabType) => void;
}

const useCommunityTabStore = create<CommunityTab>((set) => ({
	tabType: 'TOTAL',
	setTabType: (newTabType) => set(() => ({ tabType: newTabType })),
}));

export default useCommunityTabStore;

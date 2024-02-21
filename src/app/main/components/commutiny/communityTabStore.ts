import { create } from 'zustand';

type TabType = 'USED-MACHINERY' | 'QNA';

interface CommunityTab {
	tabType: TabType;
	setTabType: (_: TabType) => void;
}

const useCommunityTabStore = create<CommunityTab>((set) => ({
	tabType: 'USED-MACHINERY',
	setTabType: (newTabType) => set(() => ({ tabType: newTabType })),
}));

export default useCommunityTabStore;

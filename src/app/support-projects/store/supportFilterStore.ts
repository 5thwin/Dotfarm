import { create } from 'zustand';

type SupportFilterStore = {
	exceptClosedProjects: boolean;
	toggleExceptClosedProjects: () => void;
};

const useSupportFilterStore = create<SupportFilterStore>((set) => ({
	exceptClosedProjects: false,
	toggleExceptClosedProjects: () =>
		set((state) => ({ exceptClosedProjects: !state.exceptClosedProjects })),
}));

export default useSupportFilterStore;

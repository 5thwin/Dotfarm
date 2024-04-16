import { create } from 'zustand';

interface CreatPostState {
	title: string;
	contents: string;
	category?: string;
	setTitle: (_: string) => void;
	setContents: (_: string) => void;
	setCategory: (_?: string) => void;
	reset: () => void;
}

const initState = {
	title: '',
	contents: '',
	category: undefined,
};

const useCreatePostStore = create<CreatPostState>((set) => ({
	title: '',
	contents: '',
	category: undefined,
	setTitle: (title: string) => set(() => ({ title })),
	setContents: (contents: string) => set(() => ({ contents })),
	setCategory: (category?: string) => set(() => ({ category })),
	reset: () => set(() => initState),
}));
export default useCreatePostStore;

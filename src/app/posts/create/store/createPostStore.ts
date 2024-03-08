import { create } from 'zustand';

interface CreatPostState {
	title: string;
	contents: string;
	imageURL?: string;
	category?: string;
	setTitle: (_: string) => void;
	setContents: (_: string) => void;
	setImageURL: (_?: string) => void;
	setCategory: (_?: string) => void;
}

const useCreatePostStore = create<CreatPostState>((set) => ({
	title: '',
	contents: '',
	imageURL: undefined,
	category: undefined,
	setTitle: (title: string) => set(() => ({ title })),
	setContents: (contents: string) => set(() => ({ contents })),
	setImageURL: (imageURL?: string) => set(() => ({ imageURL })),
	setCategory: (category?: string) => set(() => ({ category })),
}));
export default useCreatePostStore;

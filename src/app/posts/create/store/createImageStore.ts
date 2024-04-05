import { create } from 'zustand';

interface createImageState {
	imageUrls: string[];
	serverImagePaths: string[]; //이미지 업로드로 인해 반환되는 값을 저장
	setImageUrls: (_: string[]) => void;
	addImages: (_: FileList) => void;
	deleteImage: (index?: number) => void;
	setServerImagePaths: (_: string[]) => void;
	addServerImagePath: (_: string) => void;
	deleteServerImagePath: (_: number) => void;

	reset: () => void;
}

const initState = {
	imageFiles: [],
	imageUrls: [],
	serverImagePaths: [],
};

const useCreateImageStore = create<createImageState>((set) => ({
	imageUrls: [],
	serverImagePaths: [],
	setImageUrls: (urls) => set(() => ({ imageUrls: urls })),

	addImages: (fileList) =>
		set((state) => {
			const urls = Array.from(fileList, (file) => URL.createObjectURL(file));
			return {
				imageUrls: [...state.imageUrls, ...urls].slice(0, 3),
			};
		}),
	deleteImage: (index) => {
		set((state) => {
			if (typeof index === 'undefined') {
				return { imageUrls: [...state.imageUrls].slice(0, -1) };
			}
			const updatedUrls = [...state.imageUrls];

			// Remove the image file and URL at the specified index
			updatedUrls.splice(index, 1);

			return {
				imageUrls: updatedUrls,
			};
		});
	},
	setServerImagePaths: (imagePaths) =>
		set(() => ({ serverImagePaths: imagePaths })),
	addServerImagePath: (newImagePath) =>
		set((state) => ({
			serverImagePaths: [...state.serverImagePaths, newImagePath].slice(0, 3),
		})),
	deleteServerImagePath: (index) => {
		set((state) => {
			const updatedServerImagePaths = [...state.serverImagePaths];
			updatedServerImagePaths.splice(index, 1);
			return {
				serverImagePaths: updatedServerImagePaths,
			};
		});
	},
	reset: () => set(() => initState),
}));
export default useCreateImageStore;

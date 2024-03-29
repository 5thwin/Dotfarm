import { create } from 'zustand';

interface createImageState {
	imageFiles: File[];
	imageUrls: string[];
	serverImagePaths: string[]; //이미지 업로드로 인해 반환되는 값을 저장
	setImageFiles: (_: File[]) => void;
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
	imageFiles: [],
	imageUrls: [],
	serverImagePaths: [],
	setImageFiles: (files) => set(() => ({ imageFiles: files })),
	setImageUrls: (urls) => set(() => ({ imageUrls: urls })),

	addImages: (fileList) =>
		set((state) => {
			const files = Array.from(fileList);
			const urls = Array.from(fileList, (file) => URL.createObjectURL(file));
			return {
				imageFiles: [...state.imageFiles, ...files].slice(0, 3),
				imageUrls: [...state.imageUrls, ...urls].slice(0, 3),
			};
		}),
	deleteImage: (index) => {
		set((state) => {
			if (typeof index === 'undefined') {
				return { imageFiles: [...state.imageFiles].slice(0, -1) };
			}
			const updatedFiles = [...state.imageFiles];
			const updatedUrls = [...state.imageUrls];

			// Remove the image file and URL at the specified index
			updatedFiles.splice(index, 1);
			updatedUrls.splice(index, 1);

			return {
				imageFiles: updatedFiles,
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

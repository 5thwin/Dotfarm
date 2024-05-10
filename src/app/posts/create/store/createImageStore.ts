import { ImageState } from '@/type/image';
import { create } from 'zustand';

interface CreateImageState {
	imageUrls: ImageState[];
	serverImagePaths: string[];
	addImage: (file: File) => ImageState;
	deleteImage: (index?: number) => void;
	updateImageState: (
		url: string,
		newState: 'Pending' | 'Complete' | 'Failed'
	) => void;
	addServerImagePath: (path: string) => void;
	deleteServerImagePath: (index: number) => void;
	setImageUrls: (_: ImageState[]) => void;
	setServerImagePaths: (_: string[]) => void;
	reset: () => void;
}

const initState = {
	imageFiles: [],
	imageUrls: [],
	serverImagePaths: [],
};

const useCreateImageStore = create<CreateImageState>((set) => ({
	imageUrls: [],
	serverImagePaths: [],
	addImage: (file) => {
		const newImageUrl: ImageState = {
			url: URL.createObjectURL(file),
			state: 'Pending',
		};

		set((state) => ({
			imageUrls: [...state.imageUrls, newImageUrl].slice(0, 3), // Limit to 3 images,
		}));
		return newImageUrl;
	},

	deleteImage: (index) =>
		set((state) => ({
			imageUrls:
				index !== undefined
					? state.imageUrls.filter((_, i) => i !== index)
					: state.imageUrls.slice(0, -1),
		})),

	updateImageState: (url, newState) =>
		set((state) => ({
			imageUrls: state.imageUrls.map((image) =>
				image.url === url ? { ...image, state: newState } : image
			),
		})),
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
	setImageUrls: (imageStates) => set(() => ({ imageUrls: imageStates })),
	setServerImagePaths: (imagePaths) =>
		set(() => ({ serverImagePaths: imagePaths })),

	reset: () => set(() => initState),
}));
export default useCreateImageStore;

import { useRouter, usePathname } from 'next/navigation';
import useCreateImageStore from '../store/createImageStore';
import { useState } from 'react';
import { saveTempImage } from '@/api/common/create';
import { isErrorObject } from '@/utils/error/httpError';
import Toast from '@/app/components/common/Toast';
import { convertHeicToJpeg, removeExtension } from '@/utils/image';
import useHandleError from '@/hooks/useHandleError';

export default function useImageAdd() {
	const router = useRouter();
	const pathname = usePathname();
	const { handleError } = useHandleError();
	const { addImage, addServerImagePath, deleteImage, updateImageState } =
		useCreateImageStore();
	const [fileInputKey, setFileInputKey] = useState(0); // input 요소를 새로운 요소로 인식하도록 하여 초기화를 보장
	const [isConverting, setIsConverting] = useState<boolean>(false);
	const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		setFileInputKey((previous) => previous + 1);
		const fileList = e.target.files;
		if (!fileList || !fileList[0]) return;
		let file = fileList[0];
		if (file.type === 'image/heic' || file.type === 'image/HEIC') {
			try {
				setIsConverting(true);
				const convertedJpgFile = await convertHeicToJpeg(file);
				if (convertedJpgFile) file = convertedJpgFile;
			} catch (error) {
				Toast.fire({ title: '이미지를 변환할 수 없습니다.', icon: 'error' });
				return;
			}
			setIsConverting(false);
		}

		const formData = new FormData();
		formData.append('image', file);
		try {
			const newImageStates = addImage(file);
			const res = await saveTempImage(formData);

			if (isErrorObject(res)) {
				throw new Error(JSON.stringify(res));
			}
			const { fileName } = res;
			updateImageState(newImageStates.url, 'Complete');
			addServerImagePath(fileName);
		} catch (error) {
			//이미지 업로드에 실패
			deleteImage();
			if (error instanceof Error)
				handleError({
					error,
					defaultHandler: () =>
						Toast.fire({
							title: '이미지 업로드에 실패하였습니다.',
							icon: 'error',
						}),
				});

			if (error instanceof Error && error.message.includes('401')) {
				router.push(`/401?from=${pathname}`);
			}
		}
	};
	return { fileInputKey, handleAddImage, isConverting };
}

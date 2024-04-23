import { useState } from 'react';
import useProfileImageStore from '../store/profileImageStore';
import useHandleError from '@/hooks/useHandleError';
import { convertHeicToJpeg } from '@/utils/image';
import Toast from '@/app/components/common/Toast';
import { saveTempImage } from '@/api/common/create';
import { isErrorObject } from '@/utils/error/httpError';
import { UserUpdateData, updateUserMe } from '@/api/user/update';
import { setMe } from '@/utils/localstorage';

export default function useProfileImage({ onClose }: { onClose: () => void }) {
	const { setProfileImageURL, profileImageURL, setOriginProfileImageURL } =
		useProfileImageStore();
	const [fileInputKey, setFileInputKey] = useState(0); // input 요소를 새로운 요소로 인식하도록 하여 초기화를 보장
	const [newImageURL, setNewImageURL] = useState<string>();
	const [isConverting, setIsConverting] = useState<boolean>(false);
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const { handleError } = useHandleError();
	// 프로필 이미지 변경 핸들러
	//이미지 선택 시, 서버에 임시로 이미지가 저장됨
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
				setIsConverting(false);

				if (convertedJpgFile) file = convertedJpgFile;
			} catch (error) {
				Toast.fire({ title: '이미지를 변환할 수 없습니다.', icon: 'error' });
				setIsConverting(false);
				return;
			}
		}

		const formData = new FormData();
		formData.append('image', file);
		try {
			setIsUploading(true);
			const res = await saveTempImage(formData);
			if (isErrorObject(res)) {
				throw new Error(JSON.stringify(res));
			}
			const { fileName } = res;
			setProfileImageURL(URL.createObjectURL(file));
			setNewImageURL(fileName);
		} catch (error) {
			//이미지 업로드에 실패
			if (error instanceof Error) {
				handleError({ error });
				return;
			}
			Toast.fire({ title: '이미지 업로드에 실패하였습니다.', icon: 'error' });
		}
		setIsUploading(false);
	};
	//서버에 저장된 임시 이미지를 실제로 프로필에 반영
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const updateImage: UserUpdateData = {
			image: newImageURL,
		};
		try {
			const res = await updateUserMe(updateImage);
			if (isErrorObject(res)) {
				throw new Error(JSON.stringify(res));
			}
			if (res) {
				setMe(res);
				const updatedImageURL = res.profileImage?.path;
				if (updatedImageURL) {
					setProfileImageURL(updatedImageURL);
					setOriginProfileImageURL(updatedImageURL);
				}
			}
		} catch (error) {
			if (error instanceof Error) {
				handleError({ error });
				return;
			}
			Toast.fire({ title: '이미지 변경에 실패하였습니다.', icon: 'error' });
		}
		onClose();
	};
	return {
		fileInputKey,
		handleAddImage,
		handleSubmit,
		profileImageURL,
		newImageURL,
		isConverting,
		isUploading,
	};
}

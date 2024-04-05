'use client';
import { saveTempImage } from '@/api/common/create';
import { UserUpdateData, updateUserMe } from '@/api/user/update';
import Toast from '@/app/components/common/Toast';
import useProfileImageStore from '@/app/profile/store/profileImageStore';
import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import useHandleError from '@/hooks/useHandleError';
import { setMe } from '@/utils/localstorage';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
	onClose: () => void;
};

export default function ProfileImageEditForm(props: Props) {
	const { onClose } = props;
	const { setProfileImageURL, profileImageURL, setOriginProfileImageURL } =
		useProfileImageStore();
	const [fileInputKey, setFileInputKey] = useState(0); // input 요소를 새로운 요소로 인식하도록 하여 초기화를 보장
	const [newImageURL, setNewImageURL] = useState<string>();
	const { handleError } = useHandleError();
	// 프로필 이미지 변경 핸들러
	//이미지 선택 시, 서버에 임시로 이미지가 저장됨
	const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		setFileInputKey((previous) => previous + 1);
		const fileList = e.target.files;
		if (!fileList || !fileList[0]) return;
		const formData = new FormData();
		formData.append('image', fileList[0]);
		try {
			const { fileName } = await saveTempImage(formData);
			setProfileImageURL(URL.createObjectURL(fileList[0]));
			setNewImageURL(fileName);
		} catch (error) {
			//이미지 업로드에 실패
			if (error instanceof Error) {
				handleError({ error });
				return;
			}
			Toast.fire({ title: '이미지 업로드에 실패하였습니다.', icon: 'error' });
		}
	};
	//서버에 저장된 임시 이미지를 실제로 프로필에 반영
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const updateImage: UserUpdateData = {
			image: newImageURL,
		};
		try {
			const res = await updateUserMe(updateImage);

			console.log(res);
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
	return (
		<form className="flex flex-col gap-y-2.5 p-2.5" onSubmit={handleSubmit}>
			<label htmlFor="profileImage" className="relative cursor-pointer">
				<input
					key={fileInputKey}
					type="file"
					id="profileImage"
					className="hidden"
					onChange={handleAddImage}
				/>
				{profileImageURL && (
					<div className="w-48 h-48 relative">
						<Image
							src={profileImageURL}
							alt="Profile Image"
							className="w-full h-full object-cover"
							fill
						/>
						<span className="py-5px px-2.5 absolute bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-subGray text-sm">
							변경하기
						</span>
					</div>
				)}
			</label>
			<button
				type="submit"
				className={clsx(mainGreenRoundedButtonStyle, {
					hidden: !newImageURL,
				})}
			>
				변경
			</button>
		</form>
	);
}

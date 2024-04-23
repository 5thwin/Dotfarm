'use client';
import { saveTempImage } from '@/api/common/create';
import { UserUpdateData, updateUserMe } from '@/api/user/update';
import Toast from '@/app/components/common/Toast';
import useProfileImage from '@/app/profile/hook/useProfileImage';
import useProfileImageStore from '@/app/profile/store/profileImageStore';
import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import useHandleError from '@/hooks/useHandleError';
import { isErrorObject } from '@/utils/error/httpError';
import { convertHeicToJpeg, getFullImagePath } from '@/utils/image';
import { setMe } from '@/utils/localstorage';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
	onClose: () => void;
};

export default function ProfileImageEditForm(props: Props) {
	const { onClose } = props;
	const {
		handleAddImage,
		fileInputKey,
		profileImageURL,
		handleSubmit,
		newImageURL,
	} = useProfileImage({
		onClose,
	});
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
							src={getFullImagePath(profileImageURL)}
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

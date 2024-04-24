'use client';

import useProfileImage from '@/app/profile/hook/useProfileImage';
import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import { getFullImagePath } from '@/utils/image';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import LoadingSpinner from '@/../public/loading-spinner.svg';
import { colorMainGreen } from '@/constants/color';

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
		isUploading,
		isConverting,
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
					disabled={isConverting || isUploading}
				/>

				{isUploading || isConverting ? (
					<Uploading />
				) : (
					<div className="w-48 h-48 relative">
						{profileImageURL && (
							<Image
								src={getFullImagePath(profileImageURL)}
								alt="Profile Image"
								className="w-full h-full object-cover"
								fill
							/>
						)}
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

function Uploading() {
	return (
		<div className="flexCenter w-48 h-48">
			<LoadingSpinner width="60" height="60" stroke={colorMainGreen} />
		</div>
	);
}

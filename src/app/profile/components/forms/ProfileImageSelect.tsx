import useProfileStore from '../../store/profileStore';

export default function ProfileImageSelect() {
	const { setProfileImageURL, profileImageURL } = useProfileStore();
	// 프로필 이미지 변경 핸들러
	const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setProfileImageURL(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<label htmlFor="profileImage" className="relative cursor-pointer">
			<input
				type="file"
				id="profileImage"
				className="hidden"
				onChange={handleProfileImageChange}
			/>

			<div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
				{profileImageURL ? (
					<img
						src={profileImageURL}
						alt="Profile"
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="flex justify-center items-center h-full">
						{/* Placeholder or default profile icon */}
						<span className="text-gray-400">프로필 사진</span>
					</div>
				)}
			</div>
		</label>
	);
}

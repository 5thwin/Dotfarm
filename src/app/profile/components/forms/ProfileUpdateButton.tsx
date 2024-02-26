import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import clsx from 'clsx';
import useProfileStore from '../../store/profileStore';
import { updateUserMe } from '@/api/user';

export default function ProfileUpdateButton() {
	const {
		profileImageURL,
		userName,
		region,
		subRegion,
		farmingExperience,
		majorCrops,
	} = useProfileStore();
	const handleUpdate = async () => {
		const updateData = {
			profileImageURL,
			userName,
			region,
			subRegion,
			farmingExperience,
			majorCrops,
		};
		await updateUserMe(updateData);
	};
	return (
		<button
			type="submit"
			className={clsx(mainGreenRoundedButtonStyle, 'w-full')}
			onClick={handleUpdate}
		>
			적용하기
		</button>
	);
}

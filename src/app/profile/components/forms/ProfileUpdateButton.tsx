import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import clsx from 'clsx';
import useProfileStore from '../../store/profileStore';
import { UserUpdateData } from '@/api/user';
import { useState } from 'react';
import useValidationStore from '../../store/validationStore';
import { revalidatePath } from 'next/cache';

const CHECK_USERNAME_MESSAGE = '프로필명을 다시 한번 확인해주세요.';
const CHECK_DUPLICATION_MESSAGE = '중복확인을 눌러주세요.';
const NORMAL_TEXT = '적용하기';

type Props = { updateProfile: (_: UserUpdateData) => void };
export default function ProfileUpdateButton({ updateProfile }: Props) {
	const [buttonText, setButtonText] = useState<string>(NORMAL_TEXT);
	const {
		profileImageURL,
		nickname,
		region,
		subRegion,
		farmingExperience,
		majorCrops,
	} = useProfileStore();
	const { isValid, shouldCheckDuplicate } = useValidationStore();
	const handleUpdate = async () => {
		const updateData = {
			profileImageURL,
			nickname,
			region,
			subRegion,
			farmingExperience,
			majorCrops,
		};
		if (!isValid) {
			setButtonText(CHECK_USERNAME_MESSAGE);
			return setTimeout(() => setButtonText(NORMAL_TEXT), 1500);
		}
		if (shouldCheckDuplicate) {
			setButtonText(CHECK_DUPLICATION_MESSAGE);
			return setTimeout(() => setButtonText(NORMAL_TEXT), 1500);
		}
		await updateProfile(updateData);
	};
	return (
		<button
			type="submit"
			className={clsx(mainGreenRoundedButtonStyle, 'w-full', {
				'bg-red-400 hover:bg-red-400': buttonText !== NORMAL_TEXT,
			})}
			onClick={handleUpdate}
		>
			{buttonText}
		</button>
	);
}

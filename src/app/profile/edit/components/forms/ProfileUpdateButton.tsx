import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import clsx from 'clsx';
import useProfileStore from '../../store/profileStore';
import { updateUserMe } from '@/api/user/update';
import { FarmExperience } from '@/type/user';
import useHandleError from '@/hooks/useHandleError';
import Toast from '@/app/components/common/Toast';
import { isErrorObject } from '@/utils/error/httpError';

export default function ProfileUpdateButton() {
	const { region, subRegion, farmingExperience, majorCrops } =
		useProfileStore();
	const { handleError } = useHandleError();
	const handleUpdate = async () => {
		const updateData = {
			region,
			subRegion,
			farmingExperience: (farmingExperience as FarmExperience) || undefined,
			majorCrops,
		};
		try {
			const res = await updateUserMe(updateData);
			if (isErrorObject(res)) {
				throw new Error(JSON.stringify(res));
			}
			Toast.fire({ title: '회원 정보가 변경되었습니다.', icon: 'success' });
		} catch (error) {
			if (error instanceof Error) {
				handleError({ error });
			}
		}
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

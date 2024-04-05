import Toast from '@/app/components/common/Toast';
import useSignupFromStore from '../store/signupFromStore';
import { updateUserMe } from '@/api/user/update';
import { FarmExperience, UserPartial } from '@/type/user';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { setMe } from '@/utils/localstorage';
import useHandleError from '@/hooks/useHandleError';
import { isErrorObject } from '@/utils/error/httpError';
import { DUPLICATE_ERROR_MESSAGE } from '@/app/profile/components/forms/nicknameForm/NicknameForm';

export default function useSignUp(me?: UserPartial) {
	const {
		nickname,
		nicknameValidation,
		region,
		subRegion,
		farmingExperience,
		majorCrops,
		updateUser,
		updateNicknameValidation,
	} = useSignupFromStore();

	useEffect(() => {
		me && updateUser(me);
	}, []);
	const router = useRouter();
	const { handleError } = useHandleError();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (nicknameValidation.status !== 'valid') {
			Toast.fire({
				title: '닉네임을 확인해주세요.',
				icon: 'warning',
			});
			return;
		}
		if (region.length <= 0 || subRegion.length <= 0) {
			Toast.fire({
				title: '지역을 선택해주세요.',
				icon: 'warning',
			});
			return;
		}
		if (farmingExperience.length <= 0) {
			Toast.fire({
				title: '영농경력을 선택해주세요.',
				icon: 'warning',
			});
			return;
		}
		if (majorCrops.length <= 0) {
			Toast.fire({
				title: '주요작물을 선택해주세요.',
				icon: 'warning',
			});
			return;
		}
		try {
			const res = await updateUserMe({
				nickname,
				region,
				subRegion,
				farmingExperience,
				majorCrops,
				status: 'ACTIVE',
			});
			if (res) {
				setMe(res); //로컬스토리지에 변경된 나의 정보 저장
				router.push('/main');
			}
		} catch (error) {
			if (error instanceof Error) {
				const errorObject = JSON.parse(error.message);
				if (isErrorObject(errorObject)) {
					if (errorObject.message === DUPLICATE_ERROR_MESSAGE) {
						updateNicknameValidation({
							status: 'duplicate',
							message: DUPLICATE_ERROR_MESSAGE,
						});
					}
				}
				handleError({ error });
			}
		}
	};
	return { handleSubmit };
}

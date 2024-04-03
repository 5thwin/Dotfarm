import Toast from '@/app/components/common/Toast';
import useSignupFromStore from '../store/signupFromStore';
import { updateUserMe } from '@/api/user/update';
import { FarmExperience, UserPartial } from '@/type/user';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function useSignUp(me?: UserPartial) {
	const {
		nickname,
		nicknameValidation,
		region,
		subRegion,
		farmingExperience,
		majorCrops,
		updateUser,
	} = useSignupFromStore();

	useEffect(() => {
		me && updateUser(me);
	}, [me]);
	const router = useRouter();
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
			});
			if (res) {
				console.log(res);
				router.push('/main');
			}
		} catch (e) {
			alert('에러가 발생했습니다.');
		}
	};
	return { handleSubmit };
}

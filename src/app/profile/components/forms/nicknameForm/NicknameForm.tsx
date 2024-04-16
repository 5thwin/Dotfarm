import Toast from '@/app/components/common/Toast';
import ProfileUserName from './ProfileUserName';
import useNicknameFormStore from '@/app/profile/store/nicknameFormStore';
import { updateUserMe } from '@/api/user/update';
import useHandleError from '@/hooks/useHandleError';
import { ErrorResponse, isErrorObject } from '@/utils/error/httpError';
import { getMe, setMe } from '@/utils/localstorage';
import safeJsonParse from '@/utils/safeJsonParse';

export const DUPLICATE_ERROR_MESSAGE = '이미 존재하는 닉네임 입니다.';
export const DUPLICATE_DISCRIPTION = '이미 누군가가 사용하고 있네요!';
export default function NicknameForm() {
	const { nickname, nicknameValidation, setNicknameValidation } =
		useNicknameFormStore();
	const { handleError } = useHandleError();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (nicknameValidation.status !== 'valid') {
			Toast.fire({
				icon: 'warning',
				title: '다른 이름을 사용해주세요',
				text: nicknameValidation.message,
			});
			return;
		}
		try {
			const res = await updateUserMe({ nickname });
			Toast.fire({ title: '닉네임을 변경했습니다.', icon: 'success' });
			// 로컬스토리지 정보 업데이트
			const me = getMe();
			me && setMe({ ...me, nickname });
		} catch (error) {
			if (error instanceof Error) {
				const { data: errorObject } = safeJsonParse<ErrorResponse>(
					error.message
				);
				if (isErrorObject(errorObject)) {
					if (errorObject.message === DUPLICATE_ERROR_MESSAGE) {
						setNicknameValidation({
							status: 'duplicate',
							message: DUPLICATE_DISCRIPTION,
						});
					}
				}
				handleError({ error });
			}
		}
	};
	return (
		<form className="flex flex-col gap-y-5px" onSubmit={handleSubmit}>
			<label htmlFor="profileName" className="font-bold">
				프로필명
			</label>
			<ProfileUserName />
		</form>
	);
}

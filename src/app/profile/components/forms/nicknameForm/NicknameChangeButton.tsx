import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import useProfileStore from '../../../store/profileStore';
import Toast from '@/app/components/common/Toast';
import useValidationStore from '../../../store/validationStore';
import clsx from 'clsx';
import useNicknameFormStore from '@/app/profile/store/nicknameFormStore';

export default function NicknameChangeButton() {
	const { nickname, originNickname, nicknameValidation } =
		useNicknameFormStore();
	return (
		<button
			type="submit"
			disabled={nickname === originNickname}
			className={clsx(mainGreenRoundedButtonStyle, 'disabled:bg-subText')}
		>
			변경하기
		</button>
	);
}

// toast message
const callAvaliableMessage = () =>
	Toast.fire({
		icon: 'success',
		title: '사용 가능한 이름입니다.',
	});

const callDuplicateMessage = () => {
	Toast.fire({
		icon: 'warning',
		title: '중복된 이름입니다.',
		text: '다른 이름을 사용해주세요',
	});
};

const callErrorMessage = () => {
	Toast.fire({
		icon: 'error',
		title: '에러가 발생하였습니다.',
		text: '이후에 다시 시도해주세요.',
	});
};

const callNotValidMessage = () => {
	Toast.fire({
		icon: 'warning',
		title: '유효하지 않은 이름입니다.',
		html: '특수문자와 공백을 제거 후<br/>2~9글자로 지어주세요',
	});
};

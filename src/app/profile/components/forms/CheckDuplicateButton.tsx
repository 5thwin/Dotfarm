import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import useProfileStore from '../../store/profileStore';
import Toast from '@/app/components/common/Toast';
import { checkUserNameAvailability } from '@/api/user/get';
import useValidationStore from '../../store/validationStore';

export default function CheckDuplicateButton() {
	const { nickname, originUserName } = useProfileStore();
	const { setShouldCheckDuplicate, isValid } = useValidationStore();
	const onClick = async () => {
		if (!isValid) {
			return callNotValidMessage(); //유효한 닉네임이 아님
		}
		if (nickname === originUserName) {
			setShouldCheckDuplicate(false); //기존 닉네임을 그대로 사용하는 경우, 중복체크 필요 없음
			return callAvaliableMessage();
		}
		try {
			const data = await checkUserNameAvailability(nickname);
			if (data?.isDuplicate) {
				setShouldCheckDuplicate(true); //중복된 닉네임인 경우, 다시 중복 체크해야함을 표시
				return callDuplicateMessage();
			}
			setShouldCheckDuplicate(false); //중복 체크 성공, 이후 중복체크 필요 없음
			return callAvaliableMessage();
		} catch (e) {
			callErrorMessage();
		}
	};
	return (
		<button className={mainGreenRoundedButtonStyle} onClick={onClick}>
			중복확인
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

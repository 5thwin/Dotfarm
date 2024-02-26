import { mainGreenRoundedButtonStyle } from '@/app/styles/common/buttonStyle';
import useProfileStore from '../../store/profileStore';
import Toast from '@/app/components/common/Toast';
import { checkUserNameAvailability } from '@/api/user';

export default function CheckDuplicateButton() {
	const { userName, originUserName } = useProfileStore();

	const onClick = async () => {
		if (userName === originUserName) {
			return callAvaliableMessage();
		}
		try {
			const data = await checkUserNameAvailability(userName);
			if (data?.isDuplicate) {
				return callDuplicateMessage();
			}
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
		icon: 'error',
		title: '중복된 이름입니다.',
		text: '다른 이름을 사용해주세요',
	});
};

const callErrorMessage = () => {
	Toast.fire({
		icon: 'warning',
		title: '에러가 발생하였습니다.',
		text: '이후에 다시 시도해주세요.',
	});
};

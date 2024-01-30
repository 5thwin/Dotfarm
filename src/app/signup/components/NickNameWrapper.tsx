import clsx from 'clsx';
import useSignupFromStore from '../store/signupFromStore';
import { useState } from 'react';

type NicknameValidationStatus =
	| 'duplicate' // 중복됨
	| 'invalidLength' // 길이가 부적절함
	| 'invalidChar' // 부적절한 문자 포함
	| 'valid' // 유효함
	| 'initial'; // 초기 상태 혹은 검사 전

// 닉네임 검증 상태를 위한 타입
type NicknameValidation = {
	status: NicknameValidationStatus;
	message: string;
};

export default function NickNameWrapper() {
	const { nickname, updateNickname, updateIsValidNickName } =
		useSignupFromStore();

	const [nicknameValidation, setNicknameValidation] =
		useState<NicknameValidation>({
			status: 'initial',
			message: '',
		});

	// 닉네임 검증 로직 (예시)
	const validateNickname = (nickname: string) => {
		if (nickname.length < 2 || nickname.length > 9) {
			setNicknameValidation({
				status: 'invalidLength',
				message: '닉네임은 2자 이상 9자 이하로 설정해 주세요.',
			});
			return;
		} else if (containsSpecialCharacters(nickname)) {
			setNicknameValidation({
				status: 'invalidChar',
				message:
					'닉네임에는 특수문자를 사용할 수 없습니다. 다시 입력해 주세요.',
			});
			return;
		}
		// api 요청을 통해 중복된 닉네임인지 확인
		if (/* 닉네임 중복 검사 로직 */ false) {
		} else {
			updateIsValidNickName(true);
			setNicknameValidation({
				status: 'valid',
				message: '사용 가능한 멋진 닉네임이네요!',
			});
		}
	};
	return (
		<div id="signup-nickname" className="flex flex-col gap-y-1 w-[295px]">
			<p className="font-bold">닉네임</p>
			<div className="flex gap-x-2.5">
				<input
					className={clsx(defaultInputStyle, 'py-2.5 px-15px flex-1')}
					onChange={(e) => {
						updateNickname(e.target.value);
						updateIsValidNickName(false); //유효닉네임 판단 이후 사용자가 값을 변경하는 경우
					}}
					placeholder="최소 2자 ~ 9자 이내 입력"
				/>
				<button
					className="rounded-10 bg-subText text-sm text-white px-2 font-bold"
					onClick={() => validateNickname(nickname)}
				>
					확인
				</button>
			</div>
			<p
				className={clsx('text-xs text-[#FF5D5D]', {
					'text-green-500': nicknameValidation.status === 'valid',
				})}
			>
				{nicknameValidation.message}
			</p>
		</div>
	);
}

// style
const inputBorder = clsx('rounded-10 border-lineColor border');
const defaultInputStyle = clsx(
	'flex h-[45px]',
	'placeholder:text-sm placeholder:text-subText',
	inputBorder
);

// logic
const containsSpecialCharacters = (nickname: string): boolean => {
	// 특수문자를 찾는 정규 표현식
	const specialCharRegex = /[^a-zA-Z0-9가-힣]/;

	return specialCharRegex.test(nickname);
};

import clsx from 'clsx';
import useSignupFromStore from '../store/signupFromStore';

export default function NickNameWrapper() {
	const { nickname, updateNickname, nicknameValidation } = useSignupFromStore();

	return (
		<div id="signup-nickname" className="flex flex-col gap-y-1 w-[295px]">
			<p className="font-bold">닉네임</p>
			<div className="flex gap-x-2.5">
				<input
					className={clsx(defaultInputStyle, 'py-2.5 px-15px flex-1')}
					onChange={(e) => {
						updateNickname(e.target.value);
					}}
					value={nickname}
					placeholder="최소 2자 ~ 9자 이내 입력"
				/>
			</div>
			<p
				className={clsx('text-xs', {
					'text-[#FF5D5D]':
						nicknameValidation.status !== 'valid' &&
						nicknameValidation.status !== 'initial',
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

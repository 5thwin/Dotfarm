import useProfileStore from '../../../store/profileStore';
import clsx from 'clsx';
import React from 'react';
import useValidationStore from '../../../store/validationStore';
import NicknameChangeButton from './NicknameChangeButton';
import useNicknameFormStore from '@/app/profile/store/nicknameFormStore';

export default function ProfileUserName() {
	const { nickname, setNickname, originNickname, nicknameValidation } =
		useNicknameFormStore();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setNickname(newValue);
	};

	return (
		<div className="flex flex-col">
			<div className="flex gap-x-5px w-full">
				<input
					type="text"
					id="profileName"
					value={nickname}
					onChange={handleInputChange}
					className={clsx(inputStyle, 'flex-1')}
				/>
				<NicknameChangeButton />
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
const inputStyle = clsx(
	'rounded-10 px-15px py-3 outline-none',
	'border border-subGray'
);

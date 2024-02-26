import useProfileStore from '../../store/profileStore';
import clsx from 'clsx';
import React from 'react';
import useValidationStore from '../../store/validationStore';
import CheckDuplicateButton from './CheckDuplicateButton';

export default function ProfileUserName() {
	const { isValid, setIsValid } = useValidationStore();
	const { userName, setUserName, originUserName } = useProfileStore();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setUserName(newValue);
		setIsValid(newValue);

		// setIsAvailable(false);
	};

	return (
		<div className="flex flex-col">
			<div className="flex gap-x-5px w-full">
				<input
					type="text"
					id="profileName"
					value={userName}
					onChange={handleInputChange}
					className={clsx(inputStyle, 'flex-1')}
				/>
				<CheckDuplicateButton />
			</div>
			{isValid === false && (
				<p className="text-red-500">유효하지 않은 형식입니다.</p>
			)}
			{/* {isAvailable === false && (
				<p className="text-red-500">이미 사용중인 이름입니다.</p>
			)} */}
		</div>
	);
}
// style
const inputStyle = clsx(
	'rounded-10 px-15px py-3 outline-none',
	'border border-subGray'
);

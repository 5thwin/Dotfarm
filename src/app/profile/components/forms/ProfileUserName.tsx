import useProfileStore from '../../store/profileStore';
import clsx from 'clsx';
import React from 'react';
import useValidationStore from '../../store/validationStore';
import CheckDuplicateButton from './CheckDuplicateButton';

export default function ProfileUserName() {
	const { isValid, setIsValid, setShouldCheckDuplicate, shouldCheckDuplicate } =
		useValidationStore();
	const { nickname, setUserName, originUserName } = useProfileStore();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setUserName(newValue);
		setIsValid(newValue);
	};

	return (
		<div className="flex flex-col">
			<div className="flex gap-x-5px w-full">
				<input
					type="text"
					id="profileName"
					value={nickname}
					onChange={handleInputChange}
					onBlur={(e) => {
						const newName = e.target.value;
						if (newName === originUserName)
							//기존 이름과 같을 경우 중복체크 필요 없음
							return setShouldCheckDuplicate(false);
						else {
							//중복체크 필요함
							setShouldCheckDuplicate(true);
						}
					}}
					className={clsx(inputStyle, 'flex-1')}
				/>
				<CheckDuplicateButton />
			</div>
			{isValid === false && (
				<p className="text-red-500">유효하지 않은 형식입니다.</p>
			)}
			{shouldCheckDuplicate === true && (
				<p className="text-red-500">중복 확인을 눌러주세요.</p>
			)}
		</div>
	);
}
// style
const inputStyle = clsx(
	'rounded-10 px-15px py-3 outline-none',
	'border border-subGray'
);

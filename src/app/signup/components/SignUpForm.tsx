'use client';
import RegionSelect from './RegionSelect';
import MajorCropsSelect from './MajorCropsSelect';
import FarmCareersSelect from './FarmCareersSelect';
import NickNameWrapper from './NickNameWrapper';
import useSignupFromStore from '../store/signupFromStore';
import Toast from '@/app/components/common/Toast';
import clsx from 'clsx';
export default function SignUpForm() {
	const { isValidNickName, region, updateRegion, updateSubRegion } =
		useSignupFromStore();
	const onSubmit = () => {
		if (!isValidNickName) {
			Toast.fire(
				'닉네임을 확인해주세요.',
				'닉네임을 입력 후 확인 버튼을 눌러주세요.',
				'warning'
			);
		}
	};
	return (
		<form
			id="signup-form-body"
			className="flex flex-col gap-y-10"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<NickNameWrapper />
			<div className="flex flex-col gap-y-5">
				<div id="signup-location" className="flex flex-col gap-y-1 w-[295px]">
					<p className="font-bold">지역선택</p>
					<RegionSelect />
				</div>
				<div
					id="signup-farming-careers"
					className="flex flex-col gap-y-1 w-[295px]"
				>
					<p className="font-bold">영농경력</p>
					<FarmCareersSelect />
				</div>
				<div
					id="signup-major-crops"
					className="flex flex-col gap-y-1 w-[295px]"
				>
					<p className="font-bold">주요작물</p>
					<MajorCropsSelect />
				</div>
			</div>
			<button type="submit" className={submitStyle} onClick={onSubmit}>
				입력하기
			</button>
		</form>
	);
}
const submitStyle = clsx(
	'w-full py-2.5 px-10 h-[45px] bg-subText',
	'font-bold text-white rounded-10'
);

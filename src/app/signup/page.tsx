'use client';
import clsx from 'clsx';
import RegionSelect from './components/RegionSelect';
import MajorCropsSelect from './components/MajorCropsSelect';
import FarmCareersSelect from './components/FarmCareersSelect';
import NickNameWrapper from './components/NickNameWrapper';
import useSignupFromStore from './store/signupFromStore';
import Toast from '../components/common/Toast';
// 회원가입: 회원정보 페이지
export default function Pages() {
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
		<div className="container mx-auto h-screen flexCenter flex-col">
			<div id="signup-form-container" className={signUpContainer}>
				<div
					id="signup-form-header"
					className="flex flex-col items-center gap-y-1"
				>
					<p className="text-sm text-subText">프로필 입력</p>
					<p className="text-mainText text-lg font-bold">
						자신의 농업 프로필을 입력해주세요
					</p>
				</div>
				<form
					id="signup-form-body"
					className="flex flex-col gap-y-10"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<NickNameWrapper />
					<div className="flex flex-col gap-y-5">
						<div
							id="signup-location"
							className="flex flex-col gap-y-1 w-[295px]"
						>
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
			</div>
		</div>
	);
}

//style
const signUpContainer = clsx(
	'p-30px flex flex-col items-center gap-y-10 rounded-50 shadow-main'
);

const submitStyle = clsx(
	'w-full py-2.5 px-10 h-[45px] bg-subText',
	'font-bold text-white rounded-10'
);

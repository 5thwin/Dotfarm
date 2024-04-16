'use client';
import RegionSelect from './RegionSelect';
import MajorCropsSelect from './MajorCropsSelect';
import FarmCareersSelect from './FarmCareersSelect';
import NickNameWrapper from './NickNameWrapper';
import clsx from 'clsx';
import useSignUp from '../hook/useSignUp';
import { UserPartial } from '@/type/user';
import { KoreaRegions } from '@/utils/koreaRegions';

type Props = {
	me?: UserPartial;
	krRegions: KoreaRegions;
	crops: string[];
};

export default function SignUpForm({ me, krRegions, crops }: Props) {
	const { handleSubmit } = useSignUp(me);
	return (
		<form
			id="signup-form-body"
			className="flex flex-col gap-y-10"
			onSubmit={handleSubmit}
		>
			<NickNameWrapper />
			<div className="flex flex-col gap-y-5">
				<div id="signup-location" className="flex flex-col gap-y-1 w-[295px]">
					<p className="font-bold">지역선택</p>
					<RegionSelect koreaRegions={krRegions} />
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
					<MajorCropsSelect crops={crops} />
				</div>
			</div>
			<button type="submit" className={submitStyle}>
				가입하기
			</button>
		</form>
	);
}
const submitStyle = clsx(
	'w-full py-2.5 px-10 h-[45px] bg-mainGreen',
	'font-bold text-white rounded-10'
);

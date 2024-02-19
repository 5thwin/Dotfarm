import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';

export default function IssueBox() {
	return (
		<div
			id="weekly-farming-issues"
			className={clsx('flex flex-col gap-y-15px', blockStyle)}
		>
			<div className="flex flex-col gap-5">
				<p className="text-lg font-bold">주간 영농 이슈</p>
				<div className="flexCenter rounded-20 border border-lineColor">
					<div className="flex-1 flexCenter rounded-20 px-5 py-2.5 bg-lineColor">
						<span className="font-bold">뉴스레터</span>
					</div>
					<div className="flex-1 flexCenter px-5 py-2.5">
						<span className="font-bold">영상레터</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-y-5">
				{Array.from({ length: 6 }, (_, i) => i).map((i) => (
					<SampleLetter key={`letter_${i}`} />
				))}
			</div>
		</div>
	);
}
const SampleLetter = () => (
	<div className="flex gap-x-2.5">
		<div className={sampleLetterImgStyle}></div>
		<p>
			농촌진흥청, 날씨·병해충에 끄떡없는 ‘노지 스마트팜’ 시범 사업 추진 -
			조선비즈
		</p>
	</div>
);

// style
const sampleLetterImgStyle = clsx('w-[130px] h-[72px] rounded-10 bg-[#D9D9D9]');

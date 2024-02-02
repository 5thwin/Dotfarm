import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';

export default function WeekSupport() {
	return (
		<div className={clsx(blockStyle, 'flex flex-col gap-y-5')}>
			<div className="flex gap-x-6">
				<p className="text-2xl font-bold">2024년 1월 1주차 지원사업</p>
				<button className="px-2.5 flexCenter rounded bg-lineColor font-bold">
					달력보기
				</button>
			</div>
			<div className="flex gap-x-2.5 w-[1200px]"></div>
		</div>
	);
}

function SupportBlock() {}

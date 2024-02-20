// 주차 지원사업
import { blockStyle } from '@/app/styles/common/blockStyle';
import { getWeekOfMonth } from '@/utils/date/week';
import clsx from 'clsx';
import WeekDaySupportPrograms from './WeekDaySupportPrograms';
import { IcCalendar } from '@/app/components/icons/IcCalendar';

export default function WeekSupport() {
	const now = new Date();
	return (
		<div className={clsx(blockStyle, 'p-25px', 'flex flex-col gap-y-5 ')}>
			<div className="flex justify-between">
				<p className="text-2xl font-bold">{`${now.getFullYear()}년 ${now.getMonth()}월 ${getWeekOfMonth(
					now
				)}주차 지원사업`}</p>
				<button className="px-2.5 py-5px flex rounded-full items-center bg-mainGreen font-bold gap-x-1">
					<IcCalendar />
					<span className="text-white text-sm  font-bold">달력보기</span>
				</button>
			</div>
			{/* @ts-expect-error Server Component */}
			<WeekDaySupportPrograms />
		</div>
	);
}

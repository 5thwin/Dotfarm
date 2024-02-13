// 주차 지원사업
import { blockStyle } from '@/app/styles/common/blockStyle';
import { getWeekDays, getWeekOfMonth, getWeekdayText } from '@/utils/date/week';
import clsx from 'clsx';

export default function WeekSupport() {
	const now = new Date();
	return (
		<div className={clsx(blockStyle, 'p-25px', 'flex flex-col gap-y-5 ')}>
			<div className="flex justify-between">
				<p className="text-2xl font-bold">{`${now.getFullYear()}년 ${now.getMonth()}월 ${getWeekOfMonth(
					now
				)}주차 지원사업`}</p>
				<button className="px-2.5 flexCenter rounded bg-lineColor font-bold">
					달력보기
				</button>
			</div>
			<WeekDaySupportPrograms />
		</div>
	);
}

function WeekDaySupportPrograms() {
	const weekdays = getWeekDays();
	return (
		<div className="flex gap-x-2.5">
			{weekdays.map((weekDate) => (
				<WeekdaySupportBox key={`week-${weekDate.getDay}`} date={weekDate} />
			))}
		</div>
	);
}

function WeekdaySupportBox({ date }: { date: Date }) {
	const isToday = date.getDate() === new Date().getDate();
	return (
		<div className={getWeekdayBoxStyle(isToday)}>
			<div className={weekDayBoxHeadStyle}>
				<p>
					<b>{date.getDate()}</b> {getWeekdayText(date)}
				</p>
				{isToday && <TodayMark />}
			</div>
		</div>
	);
}

function TodayMark() {
	return (
		<span className="flex py-5px px-2.5 rounded-full text-white bg-mainGreen text-sm">
			오늘
		</span>
	);
}
// style
const getWeekdayBoxStyle = (isToday: boolean) =>
	clsx('rounded-20 h-[295px] flex-1', 'flex flex-col gap-y-15px p-15px', {
		'bg-subGreen': isToday,
	});
const weekDayBoxHeadStyle = clsx('flex justify-between items-center');

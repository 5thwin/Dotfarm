import { SupportProgram } from '@/type/support';
import { getWeekdayText } from '@/utils/date/week';
import clsx from 'clsx';
import DaySupportList from './DaySupportList';

export default function WeekdaySupportBox({
	date,
	supportPrograms,
}: {
	date: Date;
	supportPrograms: SupportProgram[];
}) {
	const isToday = date.getDate() === new Date().getDate();
	return (
		<div className={getWeekdayBoxStyle(isToday)}>
			<div className={weekDayBoxHeadStyle}>
				<p>
					<b>{date.getDate()}</b> {getWeekdayText(date)}
				</p>
				{isToday && <TodayMark />}
			</div>
			<DaySupportList supportPrograms={supportPrograms} />
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
const weekDayBoxHeadStyle = clsx('flex justify-between items-center ');

import clsx from 'clsx';
import CalendarDate from './CalendarDate';
import { SupportProgram } from '@/type/support';
import { getStartOrEndOnDate } from '@/utils/supportPrograms';

type Props = {
	year: number;
	month: number;
	date: Date;
	supports: SupportProgram[];
};
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
export default function CalendarContents({
	year,
	month,
	date,
	supports,
}: Props) {
	const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
	const daysInMonth = new Date(year, month, 0).getDate();
	const daysArray = [];

	// Fill leading days of the previous month
	for (let i = 0; i < firstDayOfMonth; i++) {
		daysArray.unshift(new Date(year, month - 1, -i));
	}

	// Fill days of the current month
	for (let day = 1; day <= daysInMonth; day++) {
		daysArray.push(new Date(year, month - 1, day));
	}

	// Fill trailing days of the next month to complete the week
	const lastDayOfMonth = new Date(year, month - 1, daysInMonth).getDay();
	for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
		daysArray.push(new Date(year, month, i));
	}

	return (
		<div className="flex flex-col gap-y-15px">
			<div className="grid grid-cols-7">
				{DAYS.map((day, index) => (
					<span
						key={index}
						className={clsx('text-center text-14 font-bold', {
							'text-red-400': index === 0,
							'text-blue-400': index === 6,
						})}
					>
						{day}
					</span>
				))}
			</div>
			<div className="grid grid-cols-7">
				{daysArray.map((day, index) => (
					<CalendarDate
						key={`support-date-${index}`}
						date={day}
						index={index}
						supports={getStartOrEndOnDate(supports, day)}
					/>
				))}
			</div>
		</div>
	);
}

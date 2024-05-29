import clsx from 'clsx';
import CalendarHeader from './CalendarHeader';
import CalendarContents from './CalendarContents';
import { SupportProgram } from '@/type/support';
type Props = {
	year: number;
	month: number;
	date: Date;
	supports: SupportProgram[];
};
export default function CalendarBlock({ year, month, date, supports }: Props) {
	return (
		<div className={container}>
			<CalendarHeader month={month} year={year} />
			<CalendarContents
				year={year}
				month={month}
				date={date}
				supports={supports}
			/>
		</div>
	);
}
// style
const container = clsx(
	'flex-1 flex flex-col gap-y-5 rounded-30 bg-white shadow-main overflow-hidden',
	' px-5 py-5 lg:px-0 lg:pt-15px lg:pb-0'
);

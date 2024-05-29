import MonthButtons from './MonthButtons';

type Props = { month: number; year: number };
export default function CalendarHeader({ month, year }: Props) {
	return (
		<div className="flex lg:justify-between items-center px-5">
			<div className="flex gap-x-2.5 items-center justify-between lg:justify-start w-full lg:w-auto">
				<span className="text-23 font-bold">{`${year}년 ${month}월`}</span>
				<MonthButtons year={year} month={month} />
			</div>
		</div>
	);
}

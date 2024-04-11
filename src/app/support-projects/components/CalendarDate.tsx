import { SupportProgram } from '@/type/support';
import clsx from 'clsx';
import useSelectedDateStore from '../store/selectedDateStore';
import useModalSupportsStore from '../store/modalSupportsStore';
import SupportListModal from './modal/SupportListModal';
import CalendarDatePrograms from './CalendarDatePrograms';
import { Desktop } from '@/app/components/responsive/ResponsiveUI';
import { compareDates } from '@/utils/date/compare';

type CalendarDateProps = {
	currentMonth: number;
	day: Date;
	programs: SupportProgram[];
};
export default function CalendarDate({
	day,
	currentMonth,
	programs,
}: CalendarDateProps) {
	const isToday = day.toDateString() === new Date().toDateString();
	const { setSelectedDate, selectedDate } = useSelectedDateStore();
	const { setSupportPrograms } = useModalSupportsStore();
	const isSelected = selectedDate
		? compareDates(day, selectedDate) === 0
		: isToday;
	return (
		<div
			className={getWrapperStyle(
				currentMonth === day.getMonth(),
				isToday,
				isSelected
			)}
			onClick={() => {
				setSelectedDate(day), setSupportPrograms(programs);
			}}
		>
			<span className={getDateStyle(day.getDay())}>{day.getDate()}</span>
			<div className="hidden lg:block">
				<CalendarDatePrograms programs={programs} />
			</div>
			{programs.length > 0 && (
				<div className="flexCenter lg:hidden">
					<i className={greenCircle} />
				</div>
			)}
			{/* 데스크탑일 경우에만 Modal 보여짐 */}
			<Desktop>
				{selectedDate && selectedDate === day && programs.length > 0 && (
					<SupportListModal />
				)}
			</Desktop>
		</div>
	);
}
// style
const getWrapperStyle = (
	isCurrentMonth: boolean,
	isToday?: boolean,
	isSelected?: boolean
) =>
	clsx(
		'cursor-pointer',
		'flex flex-col gap-y-1 lg:gap-y-2.5  lg:h-[186px] rounded-20',
		'py-2.5 lg:p-15px',
		{
			'opacity-30': !isCurrentMonth,
			'lg:bg-subGreen': isToday, //데스크탑 캘린더에서 오늘 날짜를 표시
			// 'bg-subGreen': isSelected, //모바일 캘린더에서 선택되었을 때, 표시
		}
	);

const getDateStyle = (weekDay: number) =>
	clsx('font-bold text-center lg:text-left', 'text-sm lg:text-base', {
		'text-[#FF5D5D]': weekDay === 0,
		'text-[#4F6BFF]': weekDay === 6,
	});
const greenCircle = clsx('w-[5px] h-[5px] rounded-full bg-mainGreen');

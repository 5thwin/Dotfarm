import { SupportProgram } from '@/type/support';
import clsx from 'clsx';
import useSelectedDateStore from '../store/selectedDateStore';
import useModalSupportsStore from '../store/modalSupportsStore';
import SupportListModal from './modal/SupportListModal';

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
	return (
		<div
			className={getWrapperStyle(currentMonth === day.getMonth(), isToday)}
			onClick={() => {
				setSelectedDate(day), setSupportPrograms(programs);
			}}
		>
			<span className={getDateStyle(day.getDay())}>{day.getDate()}</span>
			<ul className={clsx('flex flex-col gap-y-2.5')}>
				{programs.slice(0, 2).map((program, index) => (
					<li key={`program_${day.toDateString()}_${index}`}>
						<p className="text-sm line-clamp-2">{program.programName}</p>
					</li>
				))}
			</ul>
			{programs.length > 2 && (
				<span className="text-mainGreen text-sm font-bold text-center">
					외 {programs.length - 2}건 +
				</span>
			)}
			{selectedDate && selectedDate === day && <SupportListModal />}
		</div>
	);
}
// style
const getWrapperStyle = (isCurrentMonth: boolean, isToday?: boolean) =>
	clsx(
		'cursor-pointer',
		'flex flex-col gap-y-2.5 p-15px h-[186px] rounded-20',
		{
			'opacity-30': !isCurrentMonth,
			'bg-subGreen': isToday,
		}
	);

const getDateStyle = (weekDay: number) =>
	clsx('font-bold', {
		'text-[#FF5D5D]': weekDay === 0,
		'text-[#4F6BFF]': weekDay === 6,
	});

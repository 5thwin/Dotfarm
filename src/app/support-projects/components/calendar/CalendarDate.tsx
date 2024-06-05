'use client';
import { SupportProgram } from '@/type/support';
import clsx from 'clsx';
import CalendarDatePrograms from './CalendarDatePrograms';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { format } from 'date-fns';
import TodayMark from '@/app/components/badge/TodayMark';
import { getValidMonth, getValidYear } from '@/utils/date/validate';
import useSupportFilterStore from '../../store/supportFilterStore';
import { getRecruitmentStatus } from '@/utils/supportPrograms';

type CalendarDateProps = {
	date: Date;
	index: number;
	supports: SupportProgram[];
};
export default function CalendarDate({
	date,
	index,
	supports,
}: CalendarDateProps) {
	const searchParams = useSearchParams();
	const paramYear = searchParams.get('year') || undefined;
	const paramMonth = searchParams.get('month') || undefined;
	const paramDate = searchParams.get('date') || undefined;
	const year = getValidYear(paramYear);
	const month = getValidMonth(paramMonth);
	const isToday =
		format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
	const isSelected = paramDate === format(date, 'yyyy-MM-dd');
	const { exceptClosedProjects } = useSupportFilterStore();
	// 마감 제외 필터 적용
	const showSupports = exceptClosedProjects
		? supports.filter(
				(support) => getRecruitmentStatus(support) !== 'IS_CLOSED'
		  )
		: supports;

	return (
		<Link
			href={`/support-projects?year=${year}&month=${month}&date=${format(
				date,
				'yyyy-MM-dd'
			)}`}
			className={clsx(wrapperStyle, getDateBorderStyle(index))}
			scroll={false}
			prefetch={true}
			replace
		>
			<div
				className={clsx('lg:rounded-none rounded-20 w-full h-full p-2.5', {
					'bg-subGreen': isSelected,
				})}
			>
				<div
					className={clsx(
						'flex flex-col-reverse lg:flex-row  justify-center lg:justify-between items-center rounded-20',
						{
							'opacity-30': month !== date.getMonth() + 1, // 다른 달의 날짜
						}
					)}
				>
					<span className={getDateStyle(date.getDay())}>{date.getDate()}</span>
					{isToday && (
						<div>
							<span className="hidden lg:inline-block">
								<TodayMark />
							</span>
							<div className="flexCenter lg:hidden">
								<i className={greenCircle} />
							</div>
						</div>
					)}
				</div>
				<div className="hidden lg:block mt-1">
					<CalendarDatePrograms programs={showSupports} />
				</div>
			</div>
		</Link>
	);
}
// style
const wrapperStyle = clsx(
	'cursor-pointer',
	'flex flex-col gap-y-1  lg:h-[210px]'
);

const getDateStyle = (weekDay: number) =>
	clsx('font-bold text-center lg:text-left', 'text-sm lg:text-base', {
		'text-[#FF5D5D]': weekDay === 0,
		'text-[#4F6BFF]': weekDay === 6,
	});
const greenCircle = clsx('w-[5px] h-[5px] rounded-full bg-mainGreen');
const grayCircle = clsx('w-[5px] h-[5px] rounded-full bg-subGray');

const getDateBorderStyle = (index: number) =>
	clsx('border-t lg:border', {
		'lg:border-l-0': index % 7 === 0,
		'lg:border-r-0': index % 7 === 6,
		'lg:border-b-0': index > 27,
		'lg:border-t-2': index < 7,
	});

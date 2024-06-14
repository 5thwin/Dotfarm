// 주차 지원사업
import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import WeekDaySupportPrograms from './WeekDaySupportPrograms';
import IcCalendar from '@/../public/icon/calender.svg';
import Link from 'next/link';
import { PATH_SUPPROT_PROJECTS } from '@/utils/navigation';
import { format } from 'date-fns';

export default function WeekSupport() {
	return (
		<div
			className={clsx(
				blockStyle,
				'p-5 lg:p-25px',
				'flex flex-col',
				'gap-y-15px lg:gap-y-5',
				'lg:min-h-[430px]'
			)}
		>
			<div className="flex justify-between">
				<p className={responsiveTitle}>
					<span className={supportTextStyle}>이번 주 지원사업</span>
				</p>
				<Link
					className="h-10 px-2.5 sm:py-5px flexCenter rounded-full items-center bg-mainGreen font-bold gap-x-1"
					href={PATH_SUPPROT_PROJECTS}
				>
					<IcCalendar width="24" height="25" fill="white" />
					<span className="text-white  font-bold">달력보기</span>
				</Link>
			</div>
			<WeekDaySupportPrograms />
		</div>
	);
}
// style
const responsiveTitle = clsx('flex flex-col lg:flex-row gap-x-2');
const supportTextStyle = clsx('font-bold text-xl lg:text-2xl');

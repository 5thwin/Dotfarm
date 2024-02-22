// 주차 지원사업
import { blockStyle } from '@/app/styles/common/blockStyle';
import { getWeekOfMonth } from '@/utils/date/week';
import clsx from 'clsx';
import WeekDaySupportPrograms from './WeekDaySupportPrograms-desktop';
import { IcCalendar } from '@/app/components/icons/IcCalendar';
import Link from 'next/link';
import { PATH_SUPPROT_PROJECTS } from '@/utils/navigation';
import { Mobile, Desktop } from '@/app/components/responsive/ResponsiveUI';

export default function WeekSupport() {
	const now = new Date();
	return (
		<div
			className={clsx(
				blockStyle,
				'p-5 lg:p-25px',
				'flex flex-col',
				'gap-y-15px lg:gap-y-5 '
			)}
		>
			<div className="flex justify-between">
				<p className={responsiveTitle}>
					<span
						className={weekTextStyle}
					>{`${now.getFullYear()}년 ${now.getMonth()}월 ${getWeekOfMonth(
						now
					)}주차 `}</span>
					<span className={supportTextStyle}>지원사업</span>
				</p>
				<Link
					className="px-2.5 py-5px flex rounded-full items-center bg-mainGreen font-bold gap-x-1"
					href={PATH_SUPPROT_PROJECTS}
				>
					<IcCalendar />
					<span className="text-white text-sm  font-bold">달력보기</span>
				</Link>
			</div>
			<Desktop>
				{/* @ts-expect-error Server Component */}
				<WeekDaySupportPrograms />
			</Desktop>
			<Mobile></Mobile>
		</div>
	);
}
// stule
const responsiveTitle = clsx('flex flex-col lg:flex-row gap-x-2');
const weekTextStyle = clsx('text-sm lg:text-2xl lg:font-bold');
const supportTextStyle = clsx('font-bold text-xl lg:text-2xl');

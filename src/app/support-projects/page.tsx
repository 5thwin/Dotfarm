import clsx from 'clsx';
import withLayout from '../hoc/withLayout';
import MobileBackButton from '../components/common/MobileBackButton';
import { Metadata } from 'next';
import CalendarBlock from './components/calendar/CalendarBlock';
import {
	getValidDate,
	getValidMonth,
	getValidYear,
} from '@/utils/date/validate';
import SupportListBlock from './components/list/SupportListBlock';
import { getSupportsInRange } from '@/api/support/get';
import { format } from 'date-fns';
import { sortPrograms } from '@/utils/supportPrograms';

export const metadata: Metadata = {
	title: '지원사업 및 교육',
};

type Params = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};
async function SupportPage({ searchParams }: Params) {
	const year = getValidYear(searchParams.year);
	const month = getValidMonth(searchParams.month);
	const date = getValidDate(searchParams.date);

	const rangeStartDate = format(new Date(year, month - 1, -7), 'yyyy-MM-dd');
	const rangeEndDate = format(new Date(year, month, 7), 'yyyy-MM-dd');
	const supportList = sortPrograms(
		(await getSupportsInRange(rangeStartDate, rangeEndDate)) || []
	);
	return (
		<div className={responsivePageContainer}>
			<div className="flex items-center">
				<div className="lg:hidden">
					<MobileBackButton />
				</div>
				<h1 className={headTextStyle}>농업 지원사업 & 교육</h1>
			</div>
			<div className="flex gap-5 lg:flex-row flex-col lg:items-start  ">
				<CalendarBlock
					year={year}
					month={month}
					date={date}
					supports={supportList}
				/>
				<SupportListBlock
					year={year}
					month={month}
					date={date}
					supports={supportList}
				/>
			</div>
		</div>
	);
}
export default withLayout(SupportPage, true);

// style
const responsivePageContainer = clsx(
	'mx-auto lg:my-[127px] xl:px-[50px] flex flex-col gap-y-5',
	'p-5 lg:py-0'
);
const headTextStyle = clsx('lg:text-3xl text-xl font-bold');

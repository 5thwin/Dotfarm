import clsx from 'clsx';
import { format, formatDate } from 'date-fns';
import next from 'next';
import Link from 'next/link';

type Props = {
	year: number;
	month: number;
};
export default function MonthButtons({ year, month }: Props) {
	const previosMonth = month > 1 ? month - 1 : 12;
	const nextMonth = month < 12 ? month + 1 : 1;
	const previosYear = month > 1 ? year : year - 1;
	const nextHear = month < 12 ? year : year + 1;
	const previosMonthFirstDate = new Date(previosYear, previosMonth - 1, 1);
	const nextMonthFirstDate = new Date(nextHear, nextMonth - 1, 1);

	const previosLink = `/support-projects?year=${previosYear}&month=${previosMonth}&date=${formatDate(
		previosMonthFirstDate,
		'yyyy-MM-dd'
	)} `;
	const nextLink = `/support-projects?year=${nextHear}&month=${nextMonth}&date=${formatDate(
		nextMonthFirstDate,
		'yyyy-MM-dd'
	)}`;
	return (
		<div className="flex gap-x-2.5">
			<Link className={buttonStyle} href={previosLink} prefetch>
				<svg
					width="11"
					height="19"
					viewBox="0 0 11 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 18L1.76978 10.227C1.35194 9.83239 1.35194 9.16761 1.76978 8.77299L10 1"
						stroke="#7D7B7B"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			</Link>
			<Link className={buttonStyle} href={nextLink} prefetch>
				<svg
					width="11"
					height="19"
					viewBox="0 0 11 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
						stroke="#7D7B7B"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			</Link>
		</div>
	);
}

// style
const buttonStyle = clsx(
	'flexCenter rounded-full border-subGray border',
	'px-5 py-2.5'
);

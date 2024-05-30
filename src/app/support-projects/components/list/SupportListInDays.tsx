'use client';
import { SupportProgram } from '@/type/support';
import { filterProgramsByDate } from '@/utils/supportPrograms';
import SupportsDatePage from './SupportsDatePage';
import { useEffect, useRef } from 'react';

type Props = {
	year: number;
	month: number;
	date?: Date;
	supports: SupportProgram[];
};
export default function SupportListInDays({
	year,
	month,
	date,
	supports,
}: Props) {
	const daysArray = [];
	const daysInMonth = new Date(year, month, 0).getDate(); // 마지막 날짜

	// Fill days of the current month
	for (let day = 1; day <= daysInMonth; day++) {
		daysArray.push(new Date(year, month - 1, day));
	}
	const targetDateRef = useRef<HTMLLIElement | null>(null);

	const containerRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		if (targetDateRef.current && containerRef.current) {
			const container = containerRef.current;
			const target = targetDateRef.current;
			const containerTop = container.getBoundingClientRect().top;
			const targetTop = target.getBoundingClientRect().top;
			const scrollOffset = targetTop - containerTop + container.scrollTop;
			container.scrollTo({ top: scrollOffset, behavior: 'smooth' });
		}
	}, [date]);

	return (
		<ul
			className="flex flex-col divide-y gap-y-30px lg:h-[745px] overflow-scroll"
			ref={containerRef}
		>
			{daysArray.map((day, index) => {
				const supportsInDay = filterProgramsByDate(supports, day);
				if (supportsInDay.length === 0) return null;
				const isTargetDate = date && day.getDate() === date.getDate();

				return (
					<li
						key={`support-date-${index}`}
						className="first:pt-0 pt-30px"
						id={`support-date-${day.getDate()}`}
						ref={isTargetDate ? targetDateRef : null}
					>
						<SupportsDatePage date={day} supports={supportsInDay} />
					</li>
				);
			})}
		</ul>
	);
}

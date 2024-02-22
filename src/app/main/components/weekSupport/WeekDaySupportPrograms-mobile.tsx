import { getWeekDays } from '@/utils/date/week';
import WeekdaySupportBox from './WeekdaySupportBox';
import { getSupportPrograms } from '@/api/support/getSupportPrograms';
import { compareDates } from '@/utils/date/compare';
import { useState } from 'react';

export default async function WeekDaySupportPrograms() {
	const weekdays = getWeekDays();
	const data = await getSupportPrograms();
	if (!data) return null;
	const supportPrograms = data.items;
	return (
		<div className="flex gap-x-2.5">
			{weekdays.map((weekDate) => {
				// 지원공고의 마감일이 해당 요일의 날짜보다 이전인 경우에만 표시
				const filteredSupportPrograms = supportPrograms.filter(
					(program) =>
						compareDates(
							new Date(program.deadline),
							new Date(
								weekDate.getFullYear(),
								weekDate.getMonth(),
								weekDate.getDate()
							)
						) >= 0
				);
				return (
					<WeekdaySupportBox
						key={`week-${weekDate.getDay}`}
						date={weekDate}
						supportPrograms={filteredSupportPrograms}
					/>
				);
			})}
		</div>
	);
}

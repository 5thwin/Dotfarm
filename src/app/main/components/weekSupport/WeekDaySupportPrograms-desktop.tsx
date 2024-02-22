import { getWeekDays } from '@/utils/date/week';
import WeekdaySupportBox from './WeekdaySupportBox';
import { getSupportPrograms } from '@/api/support/getSupportPrograms';
import { compareDates } from '@/utils/date/compare';
import { SupportProgram } from '@/type/support';

export default async function WeekDaySupportPrograms() {
	const weekdays = getWeekDays();
	const data = await getSupportPrograms();
	if (!data) return null;
	const supportPrograms = data.items;
	// 각 요일별로 지원 프로그램을 분류하기 위한 Map 객체 초기화
	const supportProgramsByWeekDay = new Map<number, SupportProgram[]>(
		weekdays.map((weekDate) => [weekDate.getDay(), []])
	);

	// 지원 프로그램 데이터를 한 번만 순회하며 각 요일에 맞는 프로그램 분류
	data.items.forEach((program) => {
		weekdays.forEach((weekDate) => {
			const programDeadline = new Date(program.deadline);
			const weekDateWithoutTime = new Date(
				weekDate.getFullYear(),
				weekDate.getMonth(),
				weekDate.getDate()
			);
			if (compareDates(programDeadline, weekDateWithoutTime) >= 0) {
				supportProgramsByWeekDay.get(weekDate.getDay())?.push(program);
			}
		});
	});
	return (
		<div className="flex gap-x-2.5">
			{weekdays.map((weekDate) => {
				// 각 요일별로 분류된 지원 프로그램 사용
				const filteredSupportPrograms = supportProgramsByWeekDay.get(
					weekDate.getDay()
				);
				return (
					<WeekdaySupportBox
						key={`week-${weekDate.getDay()}`}
						date={weekDate}
						supportPrograms={filteredSupportPrograms || []}
					/>
				);
			})}
		</div>
	);
}

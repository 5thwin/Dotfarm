import { getWeekDays } from '@/utils/date/week';
import { getSupportsInRange } from '@/api/support/get';
import { compareDates } from '@/utils/date/compare';
import { SupportProgram } from '@/type/support';
import WeeksDisplay from './WeekDisplay-desktop';
import { Desktop, Mobile } from '@/app/components/responsive/ResponsiveUI';
import WeekDisplayMobile from './WeekDisplay-mobile';
import { format } from 'date-fns';

export default async function WeekDaySupportPrograms() {
	const weekdays = getWeekDays();
	const supportPrograms = await getSupportsInRange(
		format(weekdays[0], 'yyyy-MM-dd'),
		format(weekdays[weekdays.length - 1], 'yyyy-MM-dd')
	);
	if (!supportPrograms)
		return (
			<p className="flexCenter text-center text-subText">
				이번 주에는 모집 중인 지원사업이 없습니다.
			</p>
		);
	// 각 요일별로 지원 프로그램을 분류하기 위한 Map 객체 초기화
	const supportProgramsByWeekDay = new Map<number, SupportProgram[]>(
		weekdays.map((weekDate) => [weekDate.getDay(), []])
	);

	// 지원 프로그램 데이터를 한 번만 순회하며 각 요일에 맞는 프로그램 분류
	supportPrograms.forEach((program) => {
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
		<>
			<Desktop>
				<WeeksDisplay
					weekdays={weekdays}
					supportProgramsByWeekDay={supportProgramsByWeekDay}
				/>
			</Desktop>
			<Mobile>
				<WeekDisplayMobile
					weekdays={weekdays}
					supportProgramsByWeekDay={supportProgramsByWeekDay}
				/>
			</Mobile>
		</>
	);
}

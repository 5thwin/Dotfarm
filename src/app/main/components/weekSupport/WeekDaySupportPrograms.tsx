import { getDatesFromToday } from '@/utils/date/week';
import { getSupportsInRange } from '@/api/support/get';
import { compareDates, stripTimeFromDate } from '@/utils/date/compare';
import { SupportProgram } from '@/type/support';
import WeeksDisplay from './WeekDisplay-desktop';
import { Desktop, Mobile } from '@/app/components/responsive/ResponsiveUI';
import WeekDisplayMobile from './WeekDisplay-mobile';
import { format } from 'date-fns';
import { getMyInterests } from '@/api/user/interest/get';
import { getRecruitmentStatus } from '@/utils/supportPrograms';

export default async function WeekDaySupportPrograms() {
	const weekdays = getDatesFromToday(4);
	const supportPrograms = await getSupportsInRange(
		format(weekdays[0], 'yyyy-MM-dd'),
		format(weekdays[weekdays.length - 1], 'yyyy-MM-dd')
	);
	const interestResponse = await getMyInterests();
	const interestedSupportIds = interestResponse
		? interestResponse.data.map((interest) => interest.support.id)
		: [];

	if (!supportPrograms || supportPrograms.length === 0)
		return <NoneWeeklySupportFallback />;
	const supportProgramsWithInterest = supportPrograms.map((support) => ({
		...support,
		isInterested: interestedSupportIds.includes(support.id),
	}));
	// 각 요일별로 지원 프로그램을 분류하기 위한 Map 객체 초기화
	const supportProgramsByWeekDay = new Map<number, SupportProgram[]>(
		weekdays.map((weekDate) => [weekDate.getDay(), []])
	);
	// 지원 프로그램 데이터를 한 번만 순회하며 각 요일에 맞는 프로그램 분류
	supportProgramsWithInterest.forEach((program) => {
		weekdays.forEach((weekDate) => {
			const programStartDate = stripTimeFromDate(new Date(program.startDate));
			const programDeadline = stripTimeFromDate(new Date(program.deadline));
			const weekDateWithoutTime = new Date(
				weekDate.getFullYear(),
				weekDate.getMonth(),
				weekDate.getDate()
			);
			if (
				compareDates(programStartDate, weekDateWithoutTime) <= 0 &&
				compareDates(programDeadline, weekDateWithoutTime) >= 0 &&
				getRecruitmentStatus(program) !== 'IS_CLOSED'
			) {
				supportProgramsByWeekDay.get(weekDate.getDay())?.push(program);
			}
		});
	});
	// 모든 배열이 비어 있는지 확인
	const isEmpty = Array.from(supportProgramsByWeekDay.values()).every(
		(programs) => programs.length === 0
	);
	if (isEmpty) {
		return <NoneWeeklySupportFallback />;
	}
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

function NoneWeeklySupportFallback() {
	return (
		<p className="flexCenter text-center text-subText flex-1">
			이번 주에는 모집 중인 지원사업이 없습니다.
		</p>
	);
}

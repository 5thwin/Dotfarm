import { SupportProgram } from '@/type/support';
import { calculateDday, compareDates } from './date/compare';

/**
 * 특정 날짜에 표시되어야 하는 지원사업 프로그램 목록을 필터링합니다.
 * 모집 시작일과 마감일을 기준으로 해당 날짜에 활성화되어야 하는 프로그램들을 선별합니다.
 *
 * @param supportsPrograms - 지원사업 프로그램 목록
 * @param targetDate - 대상 날짜
 * @returns 해당 날짜에 활성화되어야 하는 지원사업 프로그램 목록
 */

export const filterProgramsByDate = (
	supportsPrograms: SupportProgram[],
	targetDate: Date
) =>
	supportsPrograms.filter((program) => {
		const deadlineDate = new Date(program.deadline);
		const startDate = new Date(program.startDate);
		return (
			// 모집 마감일자가 대상 날짜 이후 혹은 같은 날짜이고, 모집 시작일자가 대상 날짜 이전 또는 같은 날짜인 프로그램을 필터링
			compareDates(
				new Date(
					deadlineDate.getFullYear(),
					deadlineDate.getMonth(),
					deadlineDate.getDate()
				),
				new Date(
					targetDate.getFullYear(),
					targetDate.getMonth(),
					targetDate.getDate()
				)
			) >= 0 &&
			compareDates(
				new Date(
					startDate.getFullYear(),
					startDate.getMonth(),
					startDate.getDate()
				),
				new Date(
					targetDate.getFullYear(),
					targetDate.getMonth(),
					targetDate.getDate()
				)
			) <= 0
		);
	});

/**
 * 지원사업 프로그램 상태를 분류합니다..
 * 마감일과 모집상태를 기준으로 판별합니다..
 *
 * @param supportsPrograms - 지원사업 프로그램 목록
 * @returns
 */
export const getRecruitmentStatus = (
	program: SupportProgram
): 'IS_RECRUITING' | 'IS_ALWAYS' | 'IS_CLOSED' => {
	const deadline = program.deadline;
	const dDay = calculateDday(deadline);
	if (dDay < 0 || program.recruitmentStatus === '마감') return 'IS_CLOSED';

	if (dDay > 365 || program.recruitmentStatus === '상시공고')
		return 'IS_ALWAYS';
	return 'IS_RECRUITING';
};

// 배열을 주어진 우선순위에 따라 정렬
export function sortPrograms(programs: SupportProgram[]): SupportProgram[] {
	// 각 상태에 우선순위를 매김
	const statusPriority: Record<string, number> = {
		IS_RECRUITING: 1,
		IS_ALWAYS: 2,
		IS_CLOSED: 3,
	};

	return programs.sort((a, b) => {
		const statusA = getRecruitmentStatus(a);
		const statusB = getRecruitmentStatus(b);
		return statusPriority[statusA] - statusPriority[statusB];
	});
}

import { SupportProgram } from '@/type/support';
import { compareDates } from './date/compare';

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
		return (
			// 모집 마감일자가 대상 날짜 이후이고, 모집 시작일자가 대상 날짜 이전 또는 같은 날짜인 프로그램을 필터링
			compareDates(
				new Date(program.deadline),
				new Date(
					targetDate.getFullYear(),
					targetDate.getMonth(),
					targetDate.getDate()
				)
			) >= 0 &&
			compareDates(
				new Date(program.startDate),
				new Date(
					targetDate.getFullYear(),
					targetDate.getMonth(),
					targetDate.getDate()
				)
			) <= 0
		);
	});

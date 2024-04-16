/**
 * 두 날짜가 정확히 같은지 확인하기

 * @param date1
 * @param date2
 * @returns boolean
 */
export function areDatesEqual(date1: Date, date2: Date): boolean {
	return date1.getTime() === date2.getTime();
}
/**
 * 날짜의 전후 관계 확인하기
 * @param date1
 * @param date2
 * @returns date1이 date2보다 뒤에 있으면 1, 앞에 있으면 -1, 같으면 0
 */
export function compareDates(date1: Date, date2: Date): number {
	const time1 = date1.getTime();
	const time2 = date2.getTime();
	if (time1 > time2) return 1; // date1이 date2보다 뒤에 있음
	else if (time1 < time2) return -1; // date1이 date2보다 앞에 있음
	return 0; // 두 날짜가 같음
}

/**
 * 디데이를 계산합니다.
 * @param targetDate
 * @param baseDate
 * @returns
 */
export const calculateDday = (
	targetDate: string,
	baseDate?: string
): number => {
	// 기준 날짜가 주어지지 않으면 오늘 날짜를 사용
	const today = baseDate ? new Date(baseDate) : new Date();
	today.setHours(0, 0, 0, 0); // 시간, 분, 초, 밀리초를 0으로 설정

	const target = new Date(targetDate);
	target.setHours(0, 0, 0, 0); // 시간, 분, 초, 밀리초를 0으로 설정

	const diff = target.getTime() - today.getTime();
	const dDay = Math.ceil(diff / (1000 * 60 * 60 * 24));

	return dDay;
};

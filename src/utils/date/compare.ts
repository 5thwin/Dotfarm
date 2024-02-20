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

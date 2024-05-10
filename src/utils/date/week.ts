/**
 *  특정 날짜가 속한 주를 계산할 때, 그 달의 첫째 날이 무슨 요일인지와 해당 날짜가 그 달의 몇 번째 날인지를 고려하여 계산
 * @param date
 * @returns number
 */
export function getWeekOfMonth(date: Date): number {
	const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
	const firstDayOfWeek = firstDayOfMonth.getDay() || 7; // 일요일을 7로 처리
	const offsetDate = date.getDate() + firstDayOfWeek - 1; // 이번 달 첫째 날의 요일을 고려
	const weekOfMonth = Math.ceil(offsetDate / 7);
	return weekOfMonth;
}

/**
 * 오늘 날짜를 기준으로, 이번주 월요일부터 금요일의 date 객체를 반환
 * @returns Date[]
 */
export function getWeekDays(): Date[] {
	const now = new Date();
	const monday = new Date(now.setDate(now.getDate() - now.getDay() + 1));
	const weekDays = Array.from({ length: 5 }).map((_, i) => {
		const day = new Date(monday.getTime());
		day.setDate(monday.getDate() + i);
		return day;
	});
	return weekDays;
}
/**
 * date 객체를 받아 해당 요일에 해당하는 한글 텍스트를 반환합니다.
 * @param date
 * @returns
 */
export function getWeekdayText(date: Date): string {
	switch (date.getDay()) {
		case 0:
			return '일';
		case 1:
			return '월';
		case 2:
			return '화';
		case 3:
			return '수';
		case 4:
			return '목';
		case 5:
			return '금';
		case 6:
			return '토';
		default:
			return '-';
	}
}

/**
 * Generate an array of Date objects starting from today and extending for a number of days specified.
 * @param {number} days - The number of days to generate dates for, starting from today.
 * @returns {Date[]} An array of Date objects.
 */
export function getDatesFromToday(days: number) {
	const dates = [];
	const currentDate = new Date(); // 현재 날짜와 시간을 가져옵니다.

	for (let i = 0; i <= days; i++) {
		const newDate = new Date(currentDate); // 현재 날짜의 새로운 인스턴스를 생성합니다.
		newDate.setDate(currentDate.getDate() + i); // 현재 날짜에 i일을 더합니다.
		dates.push(newDate); // 생성된 날짜를 배열에 추가합니다.
	}

	return dates; // 날짜 배열을 반환합니다.
}

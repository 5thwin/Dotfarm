/**
 * Date 객체를 받아서 상대적인 시간을 나타내는 문자열을 반환하는 함수
 * @param {Date} date - 변환할 Date 객체
 * @returns {string} - 상대적인 시간을 나타내는 문자열
 */
export function relativeTime(date: Date) {
	const now = new Date(); // 현재 시간
	const diff = now.getTime() - date.getTime(); // 현재 시간과 주어진 시간의 차이 (밀리초)

	// 밀리초 단위로 상대적인 시간 계산
	const minute = 60 * 1000;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = day * 30; // 달은 30일로 가정
	const year = day * 365; // 연도는 365일로 가정

	if (diff < minute) {
		return '방금 전';
	} else if (diff < hour) {
		return Math.floor(diff / minute) + '분 전';
	} else if (diff < day) {
		return Math.floor(diff / hour) + '시간 전';
	} else if (diff < week) {
		return Math.floor(diff / day) + '일 전';
	} else if (diff < month) {
		return Math.floor(diff / week) + '주 전';
	} else if (diff < year) {
		return Math.floor(diff / month) + '달 전';
	} else {
		return Math.floor(diff / year) + '년 전';
	}
}

import { useEffect, useState } from 'react';

// 지원사업 내용을  달력 표시
export default function useSupportCalendar() {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [monthDays, setMonthDays] = useState<Date[]>([]);

	// 달력에 표시할 일자를 계산하는 로직
	useEffect(() => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		const firstDayOfMonth = new Date(year, month, 1).getDay();
		const daysInMonth = new Date(year, month + 1, 0).getDate();
		const daysArray = [];

		// Fill leading days of the previous month
		for (let i = 0; i < firstDayOfMonth; i++) {
			daysArray.unshift(new Date(year, month, -i));
		}

		// Fill days of the current month
		for (let day = 1; day <= daysInMonth; day++) {
			daysArray.push(new Date(year, month, day));
		}

		// Fill trailing days of the next month to complete the week
		const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();
		for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
			daysArray.push(new Date(year, month + 1, i));
		}

		setMonthDays(daysArray);
	}, [currentDate]);

	const handlePreviousMonth = () => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		setCurrentDate(new Date(year, month - 1, 1));
	};

	const handleNextMonth = () => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		setCurrentDate(new Date(year, month + 1, 1));
	};
	return {
		currentDate,
		setCurrentDate,
		monthDays,
		handlePreviousMonth,
		handleNextMonth,
	};
}

// utils
export const getValidYear = (year: string | string[] | undefined) => {
	const currentYear = new Date().getFullYear();
	if (typeof year === 'string') {
		const parsedYear = Number(year);
		return !isNaN(parsedYear) ? parsedYear : currentYear;
	}
	return currentYear;
};

export const getValidMonth = (month: string | string[] | undefined) => {
	const currentMonth = new Date().getMonth() + 1;
	if (typeof month === 'string') {
		const parsedMonth = Number(month);
		return !isNaN(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12
			? parsedMonth
			: currentMonth;
	}
	return currentMonth;
};

export const getValidDate = (date: string | string[] | undefined) => {
	if (typeof date === 'string') {
		const parsedDate = new Date(date);
		return !isNaN(parsedDate.getTime()) ? parsedDate : new Date();
	}
	return new Date();
};

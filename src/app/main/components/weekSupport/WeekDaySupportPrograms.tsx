import { getDatesFromToday } from '@/utils/date/week';
import { getSupportsInRange } from '@/api/support/get';
import { format } from 'date-fns';
import WeekSupportSlider from './WeekSupportSlider';

export default async function WeekDaySupportPrograms() {
	const weekdays = getDatesFromToday(4);
	const supportPrograms = await getSupportsInRange(
		format(weekdays[0], 'yyyy-MM-dd'),
		format(weekdays[weekdays.length - 1], 'yyyy-MM-dd')
	);

	if (!supportPrograms || supportPrograms.length === 0)
		return <NoneWeeklySupportFallback />;

	// 모든 배열이 비어 있는지 확인
	const isEmpty = supportPrograms.length === 0;
	if (isEmpty) {
		return <NoneWeeklySupportFallback />;
	}
	return <WeekSupportSlider supportPrograms={supportPrograms} />;
}

function NoneWeeklySupportFallback() {
	return (
		<p className="flexCenter text-center text-subText flex-1">
			이번 주에는 모집 중인 지원사업이 없습니다.
		</p>
	);
}

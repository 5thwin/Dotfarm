import { SupportProgram } from '@/type/support';
import WeekdaySupportBox from './WeekdaySupportBox';
import { sortPrograms } from '@/utils/supportPrograms';

type WeekDisplayProps = {
	weekdays: Date[];
	supportProgramsByWeekDay: Map<number, SupportProgram[]>;
};
export default function WeekDisplay({
	weekdays,
	supportProgramsByWeekDay,
}: WeekDisplayProps) {
	return (
		<div className="flex gap-x-2.5">
			{weekdays.map((weekDate) => {
				// 각 요일별로 분류된 지원 프로그램 사용
				const filteredSupportPrograms = supportProgramsByWeekDay.get(
					weekDate.getDay()
				);
				return (
					<WeekdaySupportBox
						key={`week-${weekDate.getDay()}`}
						date={weekDate}
						supportPrograms={sortPrograms(filteredSupportPrograms || [])}
					/>
				);
			})}
		</div>
	);
}

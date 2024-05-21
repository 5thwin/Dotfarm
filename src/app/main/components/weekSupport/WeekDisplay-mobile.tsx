'use client';
import { SupportProgram } from '@/type/support';
import WeekdaySupportBox from './WeekdaySupportBox';
import { useState } from 'react';
import clsx from 'clsx';
import { getWeekdayText } from '@/utils/date/week';
import SupportList from '@/app/support-projects/components/SupportList';

type WeekDisplayProps = {
	weekdays: Date[];
	supportProgramsByWeekDay: Map<number, SupportProgram[]>;
};
export default function WeekDisplayMobile({
	weekdays,
	supportProgramsByWeekDay,
}: WeekDisplayProps) {
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());
	const isSelected = (date: Date) =>
		date.toDateString() === selectedDate.toDateString();
	const supportProgramsOnSelectedDate = supportProgramsByWeekDay.get(
		selectedDate.getDay()
	);
	return (
		<div className="flex flex-col gap-y-5">
			{supportProgramsOnSelectedDate &&
			supportProgramsOnSelectedDate?.length > 0 ? (
				<div>
					<SupportList supportPrograms={supportProgramsOnSelectedDate} />
				</div>
			) : (
				<div className="flexCenter text-subText h-[20px]">
					해당 일자에 지원사업이 존재하지 않습니다.
				</div>
			)}
		</div>
	);
}

const getBoxStyle = (isSelected: boolean) =>
	clsx(
		'rounded-20 flexCenter gap-y-15px flex-col flex-1 h-[100px] cursor-pointer',
		{
			'bg-subGray': isSelected,
		}
	);

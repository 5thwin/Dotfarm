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
			<div className="flex w-full justify-around">
				{weekdays.map((weekDate) => {
					// 각 요일별로 분류된 지원 프로그램 사용
					const filteredSupportPrograms = supportProgramsByWeekDay.get(
						weekDate.getDay()
					);
					return (
						<div
							className={getBoxStyle(isSelected(weekDate))}
							key={`week-${weekDate.getDay()}`}
							onClick={() => setSelectedDate(weekDate)}
						>
							<span>{getWeekdayText(weekDate)}</span>
							<div className="flex flex-col gap-y-5px items-center">
								<span className="font-bold">{weekDate.getDate()}</span>
								<i
									className={clsx(
										'rounded-full w-[14px] h-[14px] bg-mainGreen',
										{
											invisible:
												!filteredSupportPrograms ||
												filteredSupportPrograms.length === 0,
										}
									)}
								/>
							</div>
						</div>
					);
				})}
			</div>

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

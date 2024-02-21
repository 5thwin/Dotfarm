'use client';
import React from 'react';
import CalendarDate from './CalendarDate';
import useSupportCalendar from '../hooks/useSupportCalendar';
import MonthButtons from './MonthButtons';
import { SupportProgram } from '@/type/support';
import { compareDates } from '@/utils/date/compare';
import useSelectedDateStore from '../store/selectedDateStore';
import SupportListModal from './modal/SupportListModal';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
type SupportCalendarProps = {
	programs: SupportProgram[];
};
const SupportCalendar = ({ programs }: SupportCalendarProps) => {
	const { currentDate, monthDays, handlePreviousMonth, handleNextMonth } =
		useSupportCalendar();
	const { selectedDate } = useSelectedDateStore();
	return (
		<div className="flex flex-col gap-y-5">
			<div id="calendar-header" className="flex justify-between items-center">
				<p className="text-2xl font-bold">{`${currentDate.getFullYear()}년 ${
					currentDate.getMonth() + 1
				}월`}</p>
				<MonthButtons
					goToPrev={handlePreviousMonth}
					goToNext={handleNextMonth}
				/>
			</div>
			<div className="grid grid-cols-7 gap-y-1">
				{daysOfWeek.map((day, index) => (
					<div key={index} className="text-center font-bold">
						{day}
					</div>
				))}
				{monthDays.map((day, index) => (
					<>
						{index % 7 === 0 && index !== 0 && (
							<div className="col-span-7 h-px bg-subGray"></div>
						)}
						{/* 주 구분선 */}
						<CalendarDate
							key={index}
							day={day}
							currentMonth={currentDate.getMonth()}
							programs={programs.filter((program) => {
								return (
									// 모집 시작일자와 마감일자를 계산하여, 해당 일자에 보여줄 공고들 필터링
									compareDates(
										new Date(program.deadline),
										new Date(day.getFullYear(), day.getMonth(), day.getDate())
									) >= 0 &&
									compareDates(
										new Date(program.startDate),
										new Date(day.getFullYear(), day.getMonth(), day.getDate())
									) <= 0
								);
							})}
						/>
					</>
				))}
			</div>
			{selectedDate && <SupportListModal />}
		</div>
	);
};

export default SupportCalendar;

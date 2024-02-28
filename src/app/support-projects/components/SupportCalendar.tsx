'use client';
import React from 'react';
import CalendarDate from './CalendarDate';
import useSupportCalendar from '../hooks/useSupportCalendar';
import MonthButtons from './MonthButtons';
import { SupportProgram } from '@/type/support';
import { compareDates } from '@/utils/date/compare';
import clsx from 'clsx';
import { filterProgramsByDate } from '@/utils/supportPrograms';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
type SupportCalendarProps = {
	programs: SupportProgram[];
};
const SupportCalendar = ({ programs }: SupportCalendarProps) => {
	const { currentDate, monthDays, handlePreviousMonth, handleNextMonth } =
		useSupportCalendar();
	return (
		<div className="flex flex-col gap-y-5">
			<div id="calendar-header" className="flex justify-between items-center">
				<h2 className={calendarHeaderText}>{`${currentDate.getFullYear()}년 ${
					currentDate.getMonth() + 1
				}월`}</h2>
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
							programs={filterProgramsByDate(programs, day)}
						/>
					</>
				))}
			</div>
		</div>
	);
};

export default SupportCalendar;

// style
const calendarHeaderText = clsx('lg:text-2xl font-bold text-lg');

import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import SupportCalendar from './SupportCalendar';
import { getSupportPrograms } from '@/api/support/getSupportPrograms';
import DateProgramsWrapper from './DateProgramsWrapper-mobile';

export default async function CalendarWrapper() {
	//이번달 + 지난달의 마지막 6일 + 다음달의 처음 6일 정도를 포함시켜야한다.
	//마감일 순으로 정렬해서 데이터를 받아오는 것이 효율적
	const paginatedSupportPrograms = await getSupportPrograms();
	const programs = paginatedSupportPrograms?.items;
	return (
		<>
			<section className={clsx(blockStyle, 'flex flex-col gap-y-2.5')}>
				{programs && <SupportCalendar programs={programs} />}
			</section>
			<div className="lg:hidden">
				{programs && <DateProgramsWrapper programs={programs} />}
			</div>
		</>
	);
}

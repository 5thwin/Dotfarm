import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import SupportCalendar from './SupportCalendar';
import { getSupportPrograms } from '@/api/support/get';
import DateProgramsWrapper from './DateProgramsWrapper-mobile';
import { getMyInterests } from '@/api/user/interest/get';
import { SupportProgram } from '@/type/support';

export default async function CalendarWrapper() {
	//이번달 + 지난달의 마지막 6일 + 다음달의 처음 6일 정도를 포함시켜야한다.
	//마감일 순으로 정렬해서 데이터를 받아오는 것이 효율적
	const supports = await getSupportPrograms();
	const interestResponse = await getMyInterests();
	const interestedSupportIds = interestResponse
		? interestResponse.data.map((interest) => interest.support.id)
		: null;
	const supportsWithInterest =
		supports && interestedSupportIds
			? supports.map((support) => ({
					...support,
					isInterested: interestedSupportIds.includes(support.id),
			  }))
			: supports;
	return (
		<>
			<section className={clsx(blockStyle, 'flex flex-col gap-y-2.5')}>
				{supportsWithInterest && (
					<SupportCalendar programs={supportsWithInterest} />
				)}
			</section>
			{/* 모바일에서는 하단에 지원사업 목록이 보여짐  */}
			<div className="lg:hidden">
				{supportsWithInterest && (
					<DateProgramsWrapper programs={supportsWithInterest} />
				)}
			</div>
		</>
	);
}

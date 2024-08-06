import { blockStyle } from '@/app/styles/common/blockStyle';
import { PATH_SUPPROT_PROJECTS } from '@/utils/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import IcCalendar from '@/../public/icon/calender.svg';
import { getSearchSupport } from '@/api/support/get';
import { format } from 'date-fns';
import SupportProgramItem from '@/app/support-projects/components/SupportProgramItem';

export default async function NearDeadline() {
	const nearDeadlineSupports = await getSearchSupport({
		deadline__gte: format(new Date(), 'yyyy-MM-dd'),
		deadline__lte: format(
			new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7 * 3),
			'yyyy-MM-dd'
		), // 3주 뒤까지
		//마감일 기준으로 오름차순 정렬
		order__deadline: 'ASC',
		take: 5,
	});

	if (!nearDeadlineSupports || nearDeadlineSupports.data.length === 0)
		return null;

	return (
		<div className={clsx(blockStyle, 'flex flex-col gap-y-25px')}>
			<header className="flex justify-between items-center">
				<p className="font-bold text-lg lg:text-2xl">
					마감일 임박! 지원사업 & 교육
				</p>
				<Link
					className="h-[35px] px-2.5 py-5px flexCenter rounded-full items-center bg-mainGreen font-bold gap-x-1"
					href={PATH_SUPPROT_PROJECTS}
				>
					<IcCalendar width="20" height="20" fill="white" />
					<span className="text-white text-sm font-bold">달력보기</span>
				</Link>
			</header>
			<div className="flex flex-col divide-y-2">
				{nearDeadlineSupports.data.map((support) => (
					<div key={`deadline_${support.id}`} className="py-2.5">
						<SupportProgramItem program={support} interestButton={false} />
					</div>
				))}
			</div>
			<Link
				href={PATH_SUPPROT_PROJECTS}
				className="flexCenter py-2.5 bg-mainGreen rounded-10"
			>
				<div className="flex gap-x-5px items-center">
					<IcCalendar width="24" height="25" fill="white" />
					<span className="text-white font-bold">지원사업 더보기</span>
				</div>
			</Link>
		</div>
	);
}

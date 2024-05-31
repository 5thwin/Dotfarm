import { blockStyle } from '@/app/styles/common/blockStyle';
import { SupportProgram } from '@/type/support';
import clsx from 'clsx';
import SupportListInDays from './SupportListInDays';
import { getMyInterests } from '@/api/user/interest/get';
import SupportsDatePage from './SupportsDatePage';
import { filterProgramsByDate } from '@/utils/supportPrograms';

type Props = {
	year: number;
	month: number;
	date: Date;
	supports: SupportProgram[];
};
export default async function SupportListBlock({
	year,
	month,
	date,
	supports,
}: Props) {
	const interestResponse = await getMyInterests();
	const interestedSupportIds = interestResponse
		? interestResponse.data.map((interest) => interest.support.id)
		: [];
	const supportsWithInterest = supports.map((support) => ({
		...support,
		isInterested: interestedSupportIds.includes(support.id),
	}));
	return (
		<div className={clsx(blockStyle, 'lg:w-[400px]', 'lg:sticky lg:top-10')}>
			<SupportsDatePage
				date={date}
				supports={filterProgramsByDate(supports, date)}
			/>
		</div>
	);
}

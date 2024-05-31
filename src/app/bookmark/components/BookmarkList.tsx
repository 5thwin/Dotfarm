//관심표시를 한 지원사업 목록

import { getMyInterests } from '@/api/user/interest/get';
import NotResultFallback from '@/app/components/fallback/NotResultFallback';
import WatchItem from '@/app/main/components/banner/WatchItem';
import SupportProgramItem from '@/app/support-projects/components/SupportProgramItem';
import Image from 'next/image';

export default async function BookmarkList() {
	const interestRes = await getMyInterests();
	const myInterests = interestRes?.data || [];
	const isEmpty = myInterests.length === 0;
	if (isEmpty) {
		return (
			<NotResultFallback className="flexCenter flex-col gap-y-2.5 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p className="text-lg font-bold">
					관심목록에 담은 지원사업이 없습니다.
				</p>
			</NotResultFallback>
		);
	}
	return (
		<ul className="flex flex-col gap-y-[18px] overflow-auto">
			{myInterests.map((interest, index) => {
				const support = interest.support;
				support.isInterested = true;
				return (
					<SupportProgramItem key={`bookmark${index}`} program={support} />
				);
			})}
		</ul>
	);
}

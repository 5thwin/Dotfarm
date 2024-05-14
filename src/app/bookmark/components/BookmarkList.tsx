//관심표시를 한 지원사업 목록

import { getMyInterests } from '@/api/user/interest/get';
import WatchItem from '@/app/main/components/banner/WatchItem';
import SupportProgramItem from '@/app/support-projects/components/SupportProgramItem';
import Image from 'next/image';

export default async function BookmarkList() {
	const interestRes = await getMyInterests();
	const myInterests = interestRes?.data || [];
	const isEmpty = myInterests.length === 0;
	if (isEmpty) {
		return (
			<div className="flexCenter flex-col gap-y-2.5 ">
				<Image
					src="/notFound/notFoundSearchResult.svg"
					alt="검색결과가 없습니다."
					width={145}
					height={172.99}
				/>
				<p className="text-lg font-bold">
					관심목록에 담은 지원사업이 없습니다.
				</p>
			</div>
		);
	}
	return (
		<ul className="flex flex-col gap-y-[18px] overflow-auto">
			{myInterests.map((interest, index) => (
				<SupportProgramItem
					key={`bookmark${index}`}
					program={interest.support}
				/>
			))}
		</ul>
	);
}

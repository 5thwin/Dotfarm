'use client';
import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import useCommunityTabStore from './communityTabStore';
import TabSelector from './TabSelector';
import RecentUsedMachinery from './RecentUsedMachinery';

interface CommunitySectionProps {
	tab1Component: React.ReactNode;
	tab2Component: React.ReactNode;
}
export default function CommunitySection({
	tab1Component,
	tab2Component,
}: CommunitySectionProps) {
	const { tabType } = useCommunityTabStore();
	return (
		<section
			className={clsx(
				blockStyle,
				'flex flex-col p-25px gap-y-15px lg:gap-y-30px'
			)}
		>
			<div className="flex justify-between">
				<p className="font-bold text-2xl">영농 커뮤니티</p>
				<button className={moreButton}>더보기+</button>
			</div>
			<TabSelector />
			{tabType === 'USED-MACHINERY' && tab1Component}
			{tabType === 'QNA' && tab2Component}
		</section>
	);
}

// style
const moreButton = clsx(
	'px-15px py-5px bg-subGray rounded-full',
	'font-bold text-sm'
);

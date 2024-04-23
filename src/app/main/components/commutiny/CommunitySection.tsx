import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import TabSelector from './TabSelector';
import CommunityList from './CommunityList';
import Link from 'next/link';
import GoToWriteInput from '@/app/components/link/GoToWriteInput';
import { Suspense } from 'react';

type Props = { category?: string };
export default function CommunitySection({ category }: Props) {
	return (
		<section
			className={clsx(
				blockStyle,
				'flex flex-col p-25px gap-y-15px lg:gap-y-30px'
			)}
		>
			<div className="flex justify-between">
				<p className="font-bold text-2xl">영농 커뮤니티</p>
				<Link href={'/posts'} className={moreButton}>
					더보기+
				</Link>
			</div>
			<TabSelector category={category} />
			<Suspense key={category}>
				<CommunityList category={category} />
			</Suspense>
			<GoToWriteInput />
		</section>
	);
}

// style
const moreButton = clsx(
	'px-15px py-5px bg-subGray rounded-full',
	'font-bold text-sm'
);

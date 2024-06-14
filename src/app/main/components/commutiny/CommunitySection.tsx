import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import TabSelector from './TabSelector';
import CommunityList from './CommunityList';
import Link from 'next/link';
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
				<p className="font-bold text-xl lg:text-2xl">영농 커뮤니티</p>
				<Link
					href={`/posts${category ? `?category=${category}` : ''}`}
					className={moreButton}
				>
					더보기+
				</Link>
			</div>
			<TabSelector category={category} />
			<Suspense key={category}>
				<CommunityList category={category} />
			</Suspense>
		</section>
	);
}

// style
const moreButton = clsx(
	'px-15px py-5px bg-subGray rounded-full h-10 flexCenter',
	'font-bold'
);

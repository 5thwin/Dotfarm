import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import TabSelector from './TabSelector';
import CommunityList from './CommunityList';

interface CommunitySectionProps {
	tab1Component: React.ReactNode;
	tab2Component: React.ReactNode;
}
export default function CommunitySection() {
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
			{/* @ts-expect-error Async Server Component */}
			<CommunityList />
			<div className={inputStyle}>
				<p className="flex-1">한마디 작성해주세요</p>
				<button className={buttonStyle}>입력하기</button>
			</div>
		</section>
	);
}

// style
const moreButton = clsx(
	'px-15px py-5px bg-subGray rounded-full',
	'font-bold text-sm'
);
const inputStyle = clsx(
	'flex items-center px-5 py-15px rounded-30 bg-subGray',
	'text-subText',
	'cursor-pointer'
);
const buttonStyle = clsx(
	'flexCenter w-[72px] rounded-full justify-between',
	'text-white bg-mainGreen py-5px'
);

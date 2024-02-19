import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import Link from 'next/link';
import UsedMachineryList from './UsedMachineryList';

export default function CommunitySection() {
	return (
		<div className={clsx(blockStyle, 'p-25px flex flex-col  gap-y-30px')}>
			<div id={'community-header'} className="flex justify-between">
				<span className="text-2xl font-bold">영농 커뮤니티</span>
				<button className={moreButtonStyle}>더보기+</button>
			</div>
			<div id={'community-tabs'} className="flex">
				<button className={getTabItemStyle(false)}>중고 농기계</button>
				<button className={getTabItemStyle(false)}>QNA</button>
			</div>
			<UsedMachineryList />
		</div>
	);
}

// style
const moreButtonStyle = clsx(
	'py-5px px-15px font-bold text-sm rounded-full bg-subGray'
);
const getTabItemStyle = (isSelected: boolean) =>
	clsx('p-2.5 flexCenter', 'font-bold', {
		'border-b-4 border-mainGreen': isSelected,
	});

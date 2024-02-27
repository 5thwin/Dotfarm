'use client';
import clsx from 'clsx';
import useCommunityTabStore from './communityTabStore';

export default function TabSelector() {
	const { tabType, setTabType } = useCommunityTabStore();
	return (
		<ul className="flex gap-x-10">
			<button
				className={getItemStyle(tabType === 'TOTAL')}
				onClick={() => setTabType('TOTAL')}
			>
				전체
			</button>
			<button
				className={getItemStyle(tabType === 'USED-MACHINERY')}
				onClick={() => setTabType('USED-MACHINERY')}
			>
				중고 농기계
			</button>
			<button
				className={getItemStyle(tabType === 'QNA')}
				onClick={() => setTabType('QNA')}
			>
				QNA
			</button>
		</ul>
	);
}

const getItemStyle = (isSelected: boolean) =>
	clsx('flexCenter font-bold border-b-4 p-2.5 pb-[6px]', {
		'border-b-mainGreen': isSelected,
		'border-b-transparent': !isSelected,
	});

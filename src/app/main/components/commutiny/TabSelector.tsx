import clsx from 'clsx';
import Link from 'next/link';

type Props = { category?: string };
const MAIN_URL = '/main';
export default function TabSelector({ category }: Props) {
	return (
		<ul className="flex gap-x-10">
			<Link
				className={getItemStyle(!category)}
				href={`${MAIN_URL}`}
				replace
				scroll={false}
			>
				전체
			</Link>
			<Link
				className={getItemStyle(category === '중고')}
				replace
				scroll={false}
				href={`${MAIN_URL}?category=중고`}
			>
				중고 농기계
			</Link>
			<Link
				className={getItemStyle(category === 'QNA')}
				replace
				scroll={false}
				href={`${MAIN_URL}?category=QNA`}
			>
				QNA
			</Link>
		</ul>
	);
}

const getItemStyle = (isSelected: boolean) =>
	clsx('flexCenter font-bold border-b-4 p-2.5 pb-[6px]', {
		'border-b-mainGreen': isSelected,
		'border-b-transparent': !isSelected,
	});

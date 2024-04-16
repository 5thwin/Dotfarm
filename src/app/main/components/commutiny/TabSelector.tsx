import clsx from 'clsx';
import Link from 'next/link';

type Props = { category?: string };
const MAIN_URL = '/main';
export default function TabSelector({ category }: Props) {
	return (
		<ul className="flex gap-x-2.5 lg:gap-x-10 flex-wrap">
			<Link
				className={getItemStyle(!category)}
				href={`${MAIN_URL}`}
				replace
				scroll={false}
			>
				전체
			</Link>
			<Link
				className={getItemStyle(category === '일반')}
				replace
				scroll={false}
				href={`${MAIN_URL}?category=일반`}
			>
				일반
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
				className={getItemStyle(category === '구인/구직')}
				replace
				scroll={false}
				href={`${MAIN_URL}?category=구인/구직`}
			>
				구인/구직
			</Link>
			<Link
				className={getItemStyle(category === '질문하기')}
				replace
				scroll={false}
				href={`${MAIN_URL}?category=질문하기`}
			>
				질문하기
			</Link>
		</ul>
	);
}

const getItemStyle = (isSelected: boolean) =>
	clsx(
		'flexCenter font-bold border-b-4 lg:pb-[6px]',
		'lg:p-2.5 p-1',
		'text-sm lg:text-base',
		{
			'border-b-mainGreen': isSelected,
			'border-b-transparent': !isSelected,
		}
	);

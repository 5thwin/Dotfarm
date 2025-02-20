// This component will be used to display the category selector on mobile devices

import { postCategorys } from '@/constants/category';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
	category?: string;
};
export default function MobileCategorySelector({
	category: currentCategory,
}: Props) {
	const categorys = ['전체', ...postCategorys];
	return (
		<div
			className={clsx(
				'flex gap-x-2.5 px-5 items-center overflow-x-scroll sticky top-0 z-10 bg-white ',
				'after:contents-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-subGray'
			)}
		>
			{categorys.map((category) => (
				<Link
					key={category}
					replace
					href={category === '전체' ? '/posts' : `/posts?category=${category}`}
					className={clsx(
						'font-bold px-2.5 py-2.5 flexCenter whitespace-nowrap relative',
						{
							'after:contents-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-mainGreen after:z-10 ':
								category === currentCategory ||
								(category === '전체' && !currentCategory),
						}
					)}
				>
					{category}
				</Link>
			))}
		</div>
	);
}

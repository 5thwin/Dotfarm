import clsx from 'clsx';
import Link from 'next/link';
import IcEdit from '@/../public/icon/edit.svg';
type Props = {
	category?: string;
};
export default function GoToWriteButton({ category }: Props) {
	const path = category
		? `/posts/create?category=${category}`
		: '/posts/create';

	return (
		<Link
			href={path}
			className={clsx(
				'w-[93px] py-15px bg-mainGreen flexCenter shadow-main rounded-full gap-5px',
				'lg:w-auto lg:flex-col lg:px-5 lg:py-5 lg:rounded-30',
				'text-white'
			)}
		>
			<IcEdit width="16" height="16" />
			<span className="font-bold lg:font-normal text-white">글쓰기</span>
		</Link>
	);
}

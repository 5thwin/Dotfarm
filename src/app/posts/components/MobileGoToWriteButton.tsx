import clsx from 'clsx';
import Link from 'next/link';
import IcEdit from '@/../public/icon/edit.svg';
type Props = {
	category?: string;
};
export default function MobileGoToWriteButton({ category }: Props) {
	const path = category
		? `/posts/create?category=${category}`
		: '/posts/create';

	return (
		<Link
			href={path}
			className={clsx(
				' w-[55px] h-[55px] bg-mainGreen flexCenter shadow-main rounded-10',
				'text-white'
			)}
		>
			<IcEdit width="21" height="21" />
		</Link>
	);
}

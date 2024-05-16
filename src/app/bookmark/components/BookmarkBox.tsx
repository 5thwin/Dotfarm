import MobileBackButton from '@/app/components/common/MobileBackButton';
import { responsiveContainer } from '@/app/styles/common/blockStyle';
import BookmarkList from './BookmarkList';
import clsx from 'clsx';

export default function BookmarkBox() {
	return (
		<section
			className={clsx(
				responsiveContainer,
				'relative min-h-screen lg:min-h-[620px]'
			)}
		>
			<div className="flex flex-col gap-y-25px">
				<header className="flex items-center gap-x-2.5">
					<MobileBackButton />
					<h1 className="text-23 font-bold">관심목록</h1>
				</header>
				<BookmarkList />
			</div>
		</section>
	);
}

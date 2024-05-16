import MobileBackButton from '@/app/components/common/MobileBackButton';
import withLayout from '@/app/hoc/withLayout';
import { responsiveContainer } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import { Metadata } from 'next';
import LikeList from './components/LikeList';
import PostsPagination from '@/app/posts/components/PostsPagination';

export const metadata: Metadata = {
	title: '좋아요',
};

type Props = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

function Page({ searchParams }: Props) {
	const page =
		typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
	return (
		<section className="w-screen lg:py-[120px] flex justify-center">
			<div
				className={clsx(
					responsiveContainer,
					'relative min-h-screen lg:min-h-[620px]'
				)}
			>
				<header className={clsx('flex gap-x-2.5 items-center')}>
					<MobileBackButton />
					<h1 className="text-23 font-bold">좋아요</h1>
				</header>
				<LikeList page={page} />
			</div>
		</section>
	);
}

export default withLayout(Page, true, false, false);

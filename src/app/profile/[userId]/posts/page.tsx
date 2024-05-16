import MobileBackButton from '@/app/components/common/MobileBackButton';
import withLayout from '@/app/hoc/withLayout';
import { responsiveContainer } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import UserPostsWrapper from './components/UserPostsWrapper';

type Params = {
	userId: string;
};

type Props = {
	params: Params;
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

function Page({ params, searchParams }: Props) {
	const userId = Number(params.userId);
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
					<MobileBackButton className={'lg:hidden'} />
					<h1 className="text-23 font-bold">작성글</h1>
				</header>
				<UserPostsWrapper authorId={userId} page={page} />
			</div>
		</section>
	);
}

export default withLayout(Page, true, false, false);

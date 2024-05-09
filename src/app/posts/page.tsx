import withLayout from '../hoc/withLayout';
import PostsWrapper from './components/PostsWrapper';
import FilterBox from './components/FilterBox';
import clsx from 'clsx';
import MobileBackButton from '../components/common/MobileBackButton';

type Params = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};
async function Page({ searchParams }: Params) {
	const page =
		typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
	const category =
		typeof searchParams.category === 'string'
			? searchParams.category
			: undefined;
	const keyword =
		typeof searchParams.keyword === 'string' ? searchParams.keyword : undefined;

	return (
		<div className="py-2.5 lg:pb-20 bg-white lg:bg-inherit">
			<CommunityMobileHeader />
			<div className="flex flex-col items-center lg:mt-24 gap-y-2.5">
				<section className="flex gap-x-25px items-start w-full lg:px-20">
					<div className="hidden lg:inline-block">
						<FilterBox />
					</div>
					<PostsWrapper page={page} category={category} keyword={keyword} />
				</section>
			</div>
		</div>
	);
}

const CommunityMobileHeader = () => {
	return (
		<header className={clsx('lg:hidden flex items-center')}>
			<MobileBackButton />
			<h1 className="font-bold text-xl">영농 커뮤니티</h1>
		</header>
	);
};

export default withLayout(Page, true, false);

import withLayout from '../hoc/withLayout';
import FilterBox from '../posts/components/FilterBox';
import PostsWrapper from '../posts/components/PostsWrapper';

type Params = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

function Page({ searchParams }: Params) {
	const postsPage =
		typeof searchParams.postsPage === 'string'
			? Number(searchParams.postsPage)
			: 1;

	const supportsPage =
		typeof searchParams.supportsPage === 'string'
			? Number(searchParams.supportsPage)
			: 1;

	const keyword =
		typeof searchParams.keyword === 'string' ? searchParams.keyword : undefined;

	return (
		<div className="lg:py-10 min-h-screen">
			<div className="flex flex-col items-center lg:mt-24 gap-y-2.5">
				<section className="flex gap-x-25px items-start w-full lg:px-20">
					<div className="hidden lg:inline-block">
						<FilterBox />
					</div>
					<div className="flex flex-col gap-y-25px">
						{keyword && (
							<p className="font-bold text-3xl px-2.5">{`'${keyword}' 검색 결과`}</p>
						)}
						<PostsWrapper page={postsPage} keyword={keyword} />
					</div>
				</section>
			</div>
		</div>
	);
}

export default withLayout(Page, true, true);

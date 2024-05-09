import withLayout from '../hoc/withLayout';
import FilterBox from '../posts/components/FilterBox';

type Params = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

function Page({ searchParams }: Params) {
	const page =
		typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

	const keyword =
		typeof searchParams.keyword === 'string' ? searchParams.keyword : undefined;

	return (
		<div className="lg:pb-20">
			<div className="flex flex-col items-center lg:mt-24 gap-y-2.5">
				<section className="flex gap-x-25px items-start w-full lg:px-20">
					<div className="hidden lg:inline-block">
						<FilterBox />
					</div>
					{/* <PostsWrapper page={page} category={category} keyword={keyword} /> */}
				</section>
			</div>
		</div>
	);
}

export default withLayout(Page, true, true);

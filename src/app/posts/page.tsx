import { getPostsWithAuthor } from '@/api/post/get';
import withLayout from '../hoc/withLayout';
import PostsWrapper from './components/PostsWrapper';
import Fallback from './components/Fallback';
import FilterBox from './components/FilterBox';

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
	const keyword = searchParams.keyword;

	return (
		<div>
			<div className="flex flex-col items-center lg:mt-24 gap-y-2.5">
				{keyword && (
					<p className="hidden lg:inline-block font-bold text-xl">{`'${keyword}'로 검색한 결과입니다.`}</p>
				)}
				<section className="flex gap-x-25px items-start w-full lg:px-20">
					<div className="hidden lg:inline-block">
						<FilterBox />
					</div>
					<PostsWrapper page={page} category={category} />
				</section>
			</div>
		</div>
	);
}
export default withLayout(Page, true, false);

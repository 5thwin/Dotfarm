import { getPostsWithAuthor } from '@/api/post/get';
import { getSearchSupport } from '@/api/support/get';
import SearchPostWrapper from './SearchPostWrapper';
import SearchSupportWrapper from './SearchSupportWrapper';
import NoneSearchResult from './NoneSearchResult';

type Props = {
	postPage?: number;
	supportPage?: number;
	keyword?: string;
};
export default async function SearchResultContainer({
	postPage,
	supportPage,
	keyword,
}: Props) {
	const searchPostResponse = await getPostsWithAuthor({
		page: postPage,
		take: 5,
		keyword,
	});
	const searchSupportResponse = await getSearchSupport({
		page: supportPage,
		take: 5,
		programName: keyword,
	});
	const isPostResultExist =
		searchPostResponse && searchPostResponse.data.length > 0;
	const isSupportResultExist =
		searchSupportResponse && searchSupportResponse.data.length > 0;
	if (!isPostResultExist && !isSupportResultExist) return <NoneSearchResult />;
	return (
		<div className="flex flex-col gap-y-25px">
			{isSupportResultExist && (
				<SearchSupportWrapper
					supports={searchSupportResponse.data}
					total={searchSupportResponse.total}
				/>
			)}
			{isPostResultExist && (
				<SearchPostWrapper
					posts={searchPostResponse.data}
					total={searchPostResponse.total}
				/>
			)}
		</div>
	);
}

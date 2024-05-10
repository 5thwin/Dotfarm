import MobileBackButton from '../components/common/MobileBackButton';
import withLayout from '../hoc/withLayout';
import OpenChatBanner from '../main/components/OpenChatBanner';
import FilterBox from '../posts/components/FilterBox';
import SearchResultContainer from './components/SearchResultContainer';

type Params = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

function Page({ searchParams }: Params) {
	const postPage =
		typeof searchParams.postPage === 'string'
			? Number(searchParams.postPage)
			: 1;

	const supportPage =
		typeof searchParams.supportPage === 'string'
			? Number(searchParams.supportPage)
			: 1;

	const keyword =
		typeof searchParams.keyword === 'string' ? searchParams.keyword : undefined;

	return (
		<div className="lg:py-10 min-h-screen px-2.5 py-24 lg:px-0">
			<div className="flex flex-col items-center lg:mt-24 gap-y-2.5">
				<section className="flex gap-x-25px items-start w-full lg:px-20">
					<div className="hidden lg:inline-block">
						<FilterBox destination="/search" />
					</div>
					<div className="flex flex-col gap-y-25px">
						{keyword && (
							<div className="flex gap-x-2.5">
								<div className="lg:hidden">
									<MobileBackButton />
								</div>
								<p className="font-bold text-3xl px-2.5">{`'${keyword}' 검색 결과`}</p>
							</div>
						)}
						<SearchResultContainer
							keyword={keyword}
							postPage={postPage}
							supportPage={supportPage}
						/>
						<OpenChatBanner />
					</div>
				</section>
			</div>
		</div>
	);
}

export default withLayout(Page, true, true, true);

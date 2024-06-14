import { blockStyle } from '@/app/styles/common/blockStyle';
import PostsList from './PostsList';
import PostsPagination from './PostsPagination';
import clsx from 'clsx';
import MobileBackButton from '@/app/components/common/MobileBackButton';
import GoToWriteInput from '@/app/components/link/GoToWriteInput';
import { getPostsWithAuthor } from '@/api/post/get';
import Fallback from './Fallback';
import { getCategoryTitle } from '@/constants/category';
import MobileGoToWriteButton from './MobileGoToWriteButton';

type Props = {
	page?: number;
	category?: string;
	keyword?: string;
};
const PAGE_TAKE = 10; //한 페이지당 보여줄 아이템 개수

export default async function PostsWrapper({ page, category, keyword }: Props) {
	const response = await getPostsWithAuthor({
		page,
		take: PAGE_TAKE,
		category,
		keyword,
	});
	if (!response)
		return (
			<div className={responsiveWrapper}>
				<Fallback />
			</div>
		);

	const posts = response.data;
	const totalPage = response.total && Math.ceil(response.total / PAGE_TAKE);
	return (
		<div className={responsiveWrapper}>
			<div className={responsiveHeader}>
				<h1 className="font-bold text-xl lg:text-2xl">
					{getCategoryTitle(category)}
				</h1>
			</div>
			<div className={'px-2.5 hidden lg:p-0 lg:inline-block'}>
				<GoToWriteInput category={category} />
			</div>
			{keyword && (
				<p className="font-bold text-xl px-2.5">{`'${keyword}'로 검색한 결과입니다.`}</p>
			)}
			<PostsList posts={posts} />
			<div className="flexCenter">
				<PostsPagination totalPage={totalPage} />
			</div>
			<div className="fixed bottom-5 right-5 lg:hidden inline-block">
				<MobileGoToWriteButton category={category} />
			</div>
		</div>
	);
}
// style
const responsiveWrapper = clsx(
	'py-2.5 lg:p-30px bg-white',
	'relative',
	'rounded-none lg:rounded-30',
	'w-screen flex-1 2xl:w-[1150px]',
	'shadow-none lg:shadow-main',
	'flex flex-col gap-y-2.5',
	'lg:h-auto'
);

const responsiveHeader = clsx(
	'lg:flex gap-x-2.5 items-center',
	'py-2.5',
	'hidden'
);

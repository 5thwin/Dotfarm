import { blockStyle } from '@/app/styles/common/blockStyle';
import PostsList from './PostsList';
import PostsPagination from './PostsPagination';
import clsx from 'clsx';
import MobileBackButton from '@/app/components/common/MobileBackButton';
import GoToWriteInput from '@/app/components/link/GoToWriteInput';
import { getPostsWithAuthor } from '@/api/post/get';
import Fallback from './Fallback';

type Props = {
	page?: number;
	category?: string;
};
const PAGE_TAKE = 10; //한 페이지당 보여줄 아이템 개수

export default async function PostsWrapper({ page, category }: Props) {
	const response = await getPostsWithAuthor({
		page,
		take: PAGE_TAKE,
		category,
	});
	if (!response) return <Fallback />;

	const posts = response.data;
	const totalPage = response.total && Math.ceil(response.total / PAGE_TAKE);
	return (
		<div className={responsiveWrapper}>
			<div className={responsiveHeader}>
				<div className="lg:hidden">
					<MobileBackButton />
				</div>
				<h1 className="font-bold text-2xl">영농 커뮤니티</h1>
			</div>
			<GoToWriteInput />
			<PostsList posts={posts} />
			<div className="flexCenter">
				<PostsPagination totalPage={totalPage} />
			</div>
		</div>
	);
}
// style
const responsiveWrapper = clsx(
	blockStyle,
	'rounded-none lg:rounded-30',
	'w-screen flex-1 2xl:w-[1150px]',
	'shadow-none lg:shadow-main',
	'flex flex-col gap-y-2.5'
);

const responsiveHeader = clsx('flex gap-x-2.5 items-center');

import { getPostsWithAuthor } from '@/api/post/get';
import NotResultFallback from '@/app/components/fallback/NotResultFallback';
import PostsList from '@/app/posts/components/PostsList';
import PostsPagination from '@/app/posts/components/PostsPagination';
import clsx from 'clsx';

type Props = {
	page?: number;
	authorId: number;
};

const PAGE_TAKE = 10; //한 페이지당 보여줄 아이템 개수

export default async function UserPostsWrapper({ page, authorId }: Props) {
	const response = await getPostsWithAuthor({
		page,
		authorId,
		take: PAGE_TAKE,
	});
	if (!response || !response.data.length)
		return (
			<NotResultFallback className="flexCenter flex-col gap-y-2.5 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p className="text-lg font-bold text-center">
					아직 작성한 게시물이 없습니다.
				</p>
			</NotResultFallback>
		);

	const totalPage = response.total && Math.ceil(response.total / PAGE_TAKE);

	return (
		<div className="flex flex-col gap-y-2.5 w-full">
			<PostsList posts={response.data} />
			<PostsPagination totalPage={totalPage} />
		</div>
	);
}
// style
const listContainerStyle = clsx('flex flex-col gap-y-5', 'overflow-scroll');

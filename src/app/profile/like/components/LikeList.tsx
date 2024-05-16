import { getMyLikes } from '@/api/user/likes/get';
import NotResultFallback from '@/app/components/fallback/NotResultFallback';
import PostsPagination from '@/app/posts/components/PostsPagination';
import LikeListItem from './LikeListItem';
const PAGE_TAKE = 10; //한 페이지당 보여줄 아이템 개수

type Props = {
	page?: number;
};

export default async function LikeList({ page }: Props) {
	const likeRes = await getMyLikes({ page, take: PAGE_TAKE });
	const myLikes = likeRes?.data || [];
	const isEmpty = likeRes?.total === 0;
	if (isEmpty) {
		return (
			<NotResultFallback className="flexCenter flex-col gap-y-2.5 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p className="text-lg font-bold text-center">
					좋아요를 누른 <br />
					게시글이 없습니다.
				</p>
			</NotResultFallback>
		);
	}
	const totalPage = likeRes?.total && Math.ceil(likeRes.total / PAGE_TAKE);
	return (
		<div className="flex flex-col gap-y-2.5">
			<ul className="flex flex-col gap-y-[18px] overflow-auto">
				{myLikes.map((like, index) => (
					<LikeListItem key={`like_post_${index}`} post={like.post} />
				))}
			</ul>
			<PostsPagination totalPage={totalPage} />
		</div>
	);
}

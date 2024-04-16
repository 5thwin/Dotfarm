import { getMyLikes } from '@/api/user/likes/get';
import WatchItem from './WatchItem';
import { getMyInterests } from '@/api/user/interest/get';

export default async function Watchlist() {
	const likeResponse = await getMyLikes();
	const interestResponse = await getMyInterests();
	if (!likeResponse || !interestResponse) return null;
	const postLikes = likeResponse.data;
	const interests = interestResponse.data;
	if (postLikes.length === 0 && interests.length === 0) return null;
	return (
		<div className="hidden xl:flex flex-col max-h-[100px] 2xl:max-h-[173px] gap-y-2.5 ">
			<p className="font-bold text-lg">관심목록</p>
			<ul className="flex flex-col flex-1 overflow-scroll gap-y-[18px]">
				{interests.map(({ support, id }) => (
					<WatchItem
						key={`watch_interest_${id}`}
						title={support.programName}
						link={support.link}
						category={'지원사업'}
					/>
				))}
				{postLikes.map(({ post }) => (
					<WatchItem
						key={`watch_post_${post.id}`}
						title={post.title}
						link={`/posts/${post.id}`}
						category={`${post.category}`}
					/>
				))}
			</ul>
		</div>
	);
}
// style

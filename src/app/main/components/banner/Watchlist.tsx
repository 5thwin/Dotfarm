import { getMyLikes } from '@/api/user/likes/get';
import WatchItem from './WatchItem';

export default async function Watchlist() {
	const res = await getMyLikes();
	const postLikes = res.data;
	return (
		<div className="flex flex-col h-[173px] gap-y-2.5">
			<p className="font-bold text-lg">관심목록</p>
			<ul className="flex flex-col flex-1 overflow-scroll gap-y-[18px]">
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

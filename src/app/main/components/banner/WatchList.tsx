import { getMyInterests } from '@/api/user/interest/get';
import { getMyLikes } from '@/api/user/likes/get';
import WatchItem from './WatchItem';
import NotResultFallback from '@/app/components/fallback/NotResultFallback';

type MyWatchList = {
	category: string;
	title: string;
	link: string;
	createAt: string;
};

export default async function WatchList() {
	const interestRes = await getMyInterests();
	const likeRes = await getMyLikes();
	const myInterests = interestRes?.data || [];
	const myLikes = likeRes?.data || [];
	const myWatchLists: MyWatchList[] = [
		...myInterests.map((interest) => ({
			category: '지원사업',
			title: interest.support.programName,
			createAt: interest.createdAt,
			link: interest.support.link,
		})),
		...myLikes.map((like) => ({
			category: like.post.category,
			title: like.post.title,
			createAt: like.createdAt,
			link: `/posts/${like.post.id}`,
		})),
	].sort(
		(a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
	); // Sorting by createAt in descending order

	if (myWatchLists.length === 0) {
		return (
			<NotResultFallback className="flexCenter flex-col gap-y-2.5 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p className="text-subText font-bold text-center">
					좋아요를 누른 <br />
					게시글이 없습니다.
				</p>
			</NotResultFallback>
		);
	}
	return (
		<ul className="flex flex-col gap-y-[18px] overflow-auto">
			{myWatchLists.map((watchlist, index) => (
				<WatchItem
					key={`watchlist${index}`}
					title={watchlist.title}
					link={watchlist.link}
					category={watchlist.category}
				/>
			))}
		</ul>
	);
}

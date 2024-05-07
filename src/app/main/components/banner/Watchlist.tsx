import { getMyInterests } from '@/api/user/interest/get';
import { getMyLikes } from '@/api/user/likes/get';
import WatchItem from './WatchItem';

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

type MyWatchList = {
	category: string;
	title: string;
	link: string;
	createAt: string;
};

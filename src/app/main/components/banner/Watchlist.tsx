import WatchItem from './WatchItem';

export default function Watchlist() {
	return (
		<div className="flex flex-col h-[173px] gap-y-2.5">
			<p className="font-bold text-lg">관심목록</p>
			<ul className="flex flex-col flex-1 overflow-scroll gap-y-[18px]">
				<WatchItem />
				<WatchItem />
				<WatchItem />
				<WatchItem />
			</ul>
		</div>
	);
}
// style

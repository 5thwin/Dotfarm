import WatchList from './WatchList';

export default function WatchListBox() {
	return (
		<div className="2xl:flex flex-col gap-y-5 p-25px rounded-30 bg-white flex-1 shadow-main h-[396px] hidden ">
			<p className="text-[23px] font-bold">관심목록</p>
			<WatchList />
		</div>
	);
}

import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import NewsLetterList from './NewsLetterList';

export default function IssueBox() {
	return (
		<div
			id="weekly-farming-issues"
			className={clsx('flex flex-col gap-y-15px', blockStyle)}
		>
			<div className="flex flex-col gap-5">
				<p className="text-lg font-bold">주간 영농 이슈</p>
				<div className="flexCenter rounded-20 border border-lineColor">
					<div className="flex-1 flexCenter rounded-20 px-5 py-2.5 bg-lineColor">
						<span className="font-bold">뉴스레터</span>
					</div>
					<div className="flex-1 flexCenter px-5 py-2.5">
						<span className="font-bold">영상레터</span>
					</div>
				</div>
			</div>
			<NewsLetterList />
		</div>
	);
}

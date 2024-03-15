import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import IssueTypeSelector from './IssueTypeSelector';
import IssueListWrapper from './IssueListWrapper';
import IssueListContents from './IssueListContents';

export default function IssueBox() {
	return (
		<div
			id="weekly-farming-issues"
			className={clsx('flex flex-col gap-y-15px ', blockStyle)}
		>
			<div className="flex flex-col gap-5">
				<p className="text-lg font-bold">주간 영농 이슈</p>
				<IssueTypeSelector />
			</div>
			<div className="overflow-x-hidden">
				<IssueListWrapper>
					<IssueListContents />
				</IssueListWrapper>
			</div>
		</div>
	);
}

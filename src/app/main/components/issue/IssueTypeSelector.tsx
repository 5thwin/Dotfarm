'use client';

import clsx from 'clsx';
import useIssueTypeStore from '../../store/issueTypeStore';

// 뉴스레터와 영상레터 중에 선택하는 컴포넌트
export default function IssueTypeSelector() {
	const { issueType, setIssueType } = useIssueTypeStore();
	return (
		<div className="flexCenter rounded-20 shadow-main">
			<button
				className={getButtonStyle(issueType === '뉴스레터')}
				onClick={() => setIssueType('뉴스레터')}
			>
				<span className="font-bold">뉴스레터</span>
			</button>
			<button
				className={getButtonStyle(issueType === '영상레터')}
				onClick={() => setIssueType('영상레터')}
			>
				<span className="font-bold">영상레터</span>
			</button>
		</div>
	);
}

// style
const getButtonStyle = (isSelected: boolean) =>
	clsx('flexCenter font-bold rounded-20 flex-1 px-5 py-2.5', {
		'bg-mainGreen text-white': isSelected,
		'text-mainGreen': !isSelected,
	});

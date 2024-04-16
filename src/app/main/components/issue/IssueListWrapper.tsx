'use client';

import { ReactNode } from 'react';
import useIssueTypeStore from '../../store/issueTypeStore';
import clsx from 'clsx';

type Props = {
	children: ReactNode;
};
export default function IssueListWrapper({ children }: Props) {
	const { issueType } = useIssueTypeStore();
	return (
		<div
			className={clsx('transition-all', {
				'-translate-x-full': issueType === '영상레터',
			})}
		>
			{children}
		</div>
	);
}

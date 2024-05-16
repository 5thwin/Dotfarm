import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
	className?: string;
	contents?: string;
	children?: ReactNode;
};

export default function NotResultFallback({
	className,
	contents,
	children,
}: Props) {
	return (
		<div className={className || clsx('flexCenter flex-col gap-y-2.5')}>
			<Image
				src="/notFound/notFoundSearchResult.svg"
				alt="검색결과가 없습니다."
				width={145}
				height={172.99}
			/>
			{children || <p className="text-lg font-bold">{contents}</p>}
		</div>
	);
}

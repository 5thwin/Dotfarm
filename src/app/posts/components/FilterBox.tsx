'use client';
import { IcSearch } from '@/app/components/icons/IcSearch';
import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function FilterBox() {
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value?: string) => {
			const params = new URLSearchParams(searchParams.toString());
			value && params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);
	const [keyword, setKeyword] = useState<string>();
	return (
		<div className={blockStyle}>
			<form
				className="flex flex-col gap-y-5"
				onSubmit={(e) => e.preventDefault()}
			>
				<h2 className="font-bold text-xl">필터 설정</h2>
				<div className="flex flex-col gap-y-5px">
					<label htmlFor="search-keyword" className="font-bold">
						검색
					</label>
					<div className={searchContainer}>
						<IcSearch />
						<input
							placeholder="검색하기"
							value={keyword}
							onChange={(e) => setKeyword(e.target.value)}
						/>
					</div>
				</div>
				<Link
					href={`posts?${createQueryString('keyword', keyword)}`}
					type="submit"
					className={submitButton}
				>
					적용하기
				</Link>
			</form>
		</div>
	);
}

// style
const searchContainer = clsx(
	'flex gap-x-2 rounded-10 items-center',
	'border border-lineColor',
	'px-15px py-3.5'
);
const submitButton = clsx(
	'flexCenter flex-1 py-2.5',
	'text-white font-bold',
	'rounded-10 bg-mainGreen'
);

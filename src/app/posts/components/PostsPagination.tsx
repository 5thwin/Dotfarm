'use client';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const MAX_DISPLAYED_PAGES = 8;

type Props = { totalPage?: number; pageParamsString?: string };
export default function PostsPagination({
	totalPage = 5,
	pageParamsString = 'page',
}: Props) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const page = searchParams.get('page');
	const currentPage = typeof page === 'string' ? Number(page) : 1;

	// 페이지 버튼 생성 로직
	const startPage = Math.max(
		currentPage - Math.floor(MAX_DISPLAYED_PAGES / 2),
		1
	);
	const endPage = Math.min(startPage + MAX_DISPLAYED_PAGES - 1, totalPage);

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);
	// 페이지 이동 함수
	const goToPage = (page: number) => {
		router.replace(
			pathname + '?' + createQueryString(pageParamsString, page.toString())
		);
	};
	return (
		<ul className="flex flex-wrap justify-center space-x-2">
			{/* {currentPage > 1 && (
				<li
					className="cursor-pointer"
					onClick={() => goToPage(currentPage - 1)}
				>
					이전
				</li>
			)} */}
			{Array.from(
				{ length: endPage - startPage + 1 },
				(_, index) => startPage + index
			).map((page) => (
				<li
					key={page}
					className={getNumberStyle(page === currentPage)}
					onClick={() => goToPage(page)}
				>
					{page}
				</li>
			))}
			{/* {currentPage < totalPage && (
				<li
					className="cursor-pointer"
					onClick={() => goToPage(currentPage + 1)}
				>
					다음
				</li>
			)} */}
		</ul>
	);
}

// style
const getNumberStyle = (isCurrentPage: boolean) =>
	clsx('flexCenter font-bold w-[45px] h-[45px] rounded-full cursor-pointer', {
		'text-white bg-mainGreen': isCurrentPage,
		'text-subText': !isCurrentPage,
	});

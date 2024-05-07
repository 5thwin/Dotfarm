'use client';
import clsx from 'clsx';
import React, { useState } from 'react';
import IcSearch from '@/../public/icon/search.svg';
import { useRouter } from 'next/navigation';
const HeaderSearchBar = () => {
	const [query, setQuery] = useState('');
	const router = useRouter();

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // 폼 제출 기본 동작 방지
		router.push(`/posts?keyword=${encodeURIComponent(query)}`);
	};

	return (
		<form onSubmit={handleSearch} className={searchBoxStyle}>
			<button type="submit" className="search-button">
				<IcSearch width="19" height="19" stroke="#42C67E" />
			</button>
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="필요한 정보를 검색해 보세요"
				className="search-input outline-none flex-1"
			/>
		</form>
	);
};

export default HeaderSearchBar;
// style
const searchBoxStyle = clsx(
	'w-full',
	'px-5 py-2.5 flex gap-x-2 rounded-30 bg-white items-center',
	'border border-lineColor'
);

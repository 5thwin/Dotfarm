'use client';
import clsx from 'clsx';
import React, { useState } from 'react';
import IcSearch from '@/../public/icon/search.svg';
const GoogleSearchBox = () => {
	const [query, setQuery] = useState('');

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // 폼 제출 기본 동작 방지
		window.open(
			`https://www.google.com/search?q=${encodeURIComponent(query)}`,
			'_blank'
		);
	};

	return (
		<form onSubmit={handleSearch} className={searchBoxStyle}>
			<IcSearch width="19" height="19" stroke="#42C67E" />
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="검색어를 입력하세요"
				className="search-input outline-none flex-1"
			/>
			<button type="submit" className="search-button">
				{'->'}
			</button>
		</form>
	);
};

export default GoogleSearchBox;
// style
const searchBoxStyle = clsx(
	'w-full',
	'px-5 py-2.5 flex gap-x-2 rounded-30 bg-white items-center',
	'border border-lineColor'
);

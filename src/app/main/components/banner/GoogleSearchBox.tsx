'use client';
import clsx from 'clsx';
import React, { useState } from 'react';

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
			<IcSearchBold />
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="구글 검색하기"
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
	'px-5 py-2.5 flex gap-x-2 rounded-30 bg-white items-center'
);
// icon
const IcSearchBold = () => (
	<svg
		width="19"
		height="19"
		viewBox="0 0 19 19"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17.3752 17.3752L13.5751 13.5751M13.5751 13.5751C14.2251 12.925 14.7407 12.1533 15.0925 11.304C15.4443 10.4547 15.6254 9.54446 15.6254 8.62518C15.6254 7.7059 15.4443 6.79563 15.0925 5.94633C14.7407 5.09703 14.2251 4.32533 13.5751 3.67531C12.925 3.02528 12.1533 2.50965 11.304 2.15786C10.4547 1.80607 9.54446 1.625 8.62518 1.625C7.7059 1.625 6.79563 1.80607 5.94633 2.15786C5.09703 2.50965 4.32533 3.02528 3.67531 3.67531C2.36252 4.98809 1.625 6.76862 1.625 8.62518C1.625 10.4817 2.36252 12.2623 3.67531 13.5751C4.98809 14.8878 6.76862 15.6254 8.62518 15.6254C10.4817 15.6254 12.2623 14.8878 13.5751 13.5751Z"
			stroke="#7D7B7B"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

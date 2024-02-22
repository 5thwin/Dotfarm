import clsx from 'clsx';
import React from 'react';

interface FavoriteSite {
	name: string;
	url: string;
	iconUrl: string;
}

const favoriteSites: FavoriteSite[] = [
	{
		name: 'YouTube',
		url: 'https://www.youtube.com',
		iconUrl: 'https://path-to-youtube-icon',
	},
	{
		name: 'Naver',
		url: 'https://www.naver.com',
		iconUrl: 'https://path-to-naver-icon',
	},
	{
		name: 'YouTube',
		url: 'https://www.youtube.com',
		iconUrl: 'https://path-to-youtube-icon',
	},
	{
		name: 'Naver',
		url: 'https://www.naver.com',
		iconUrl: 'https://path-to-naver-icon',
	},
	// 추가 사이트 정보를 여기에 넣으세요
];

const FavoriteSitesBanner = () => {
	return (
		<div className="flex items-center gap-x-2.5">
			{favoriteSites.map((site, index) => (
				<a
					key={index}
					href={site.url}
					target="_blank"
					rel="noopener noreferrer"
					className={siteBoxStyle}
				>
					<img src={site.iconUrl} alt={site.name} className="w-12 h-12" />
					<p className="mt-2 text-sm font-semibold">{site.name}</p>
				</a>
			))}
		</div>
	);
};

export default FavoriteSitesBanner;

// style
const siteBoxStyle = clsx(
	'rounded-20 px-2.5 py-15px w-[140px] flexCenter flex-col',
	'bg-white bg-opacity-60  shadow-main backdrop-blur-sm'
);

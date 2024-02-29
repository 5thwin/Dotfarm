'use client';
import { useMeStore } from '@/store/meStore';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';
import AddFavoriteSiteModal from './AddFavoriteSiteModal';
import Image from 'next/image';
const MAX_SITE_COUNT = 4;
const FavoriteSitesBanner = () => {
	const { favoriteSites, removeFavoriteSite } = useMeStore();
	const siteList = [...favoriteSites, null, null, null, null].slice(
		0,
		MAX_SITE_COUNT
	);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const deleteSite = (index: number) => removeFavoriteSite(index);
	return (
		<div className="flex items-center gap-x-2.5 ">
			{siteList.map((site, index) => (
				<div key={`favoriteSite${index}`} className={siteBoxStyle}>
					{site ? (
						<>
							<Link
								href={site.url}
								target="_blank"
								rel="noopener noreferrer"
								className={siteWrapper}
							>
								<Image
									width={48}
									height={48}
									src={site.icon}
									alt={site.name}
									className={iconStyle}
								/>
								<p className="mt-2 text-sm font-semibold">{site.name}</p>
							</Link>
							<button
								className={deleteButtonStyle}
								onClick={(e) => {
									e.stopPropagation();
									e.preventDefault();
									deleteSite(index);
								}}
							>
								-
							</button>
						</>
					) : (
						<button
							className={addSiteButtonStyle}
							onClick={() => setIsOpen(true)}
						>
							추가하기+
						</button>
					)}
				</div>
			))}
			{isOpen && <AddFavoriteSiteModal onClose={() => setIsOpen(false)} />}
		</div>
	);
};

export default FavoriteSitesBanner;

// style
const siteBoxStyle = clsx(
	'relative group/box',
	'rounded-20 px-2.5 py-15px w-[140px] h-[102px]',
	'bg-white bg-opacity-60  shadow-main backdrop-blur-sm'
);
const siteWrapper = clsx('flexCenter flex-col w-full h-full group/link');
const iconStyle = clsx(
	'rounded-10 group-hover/link:scale-105 transition-transform'
);
const addSiteButtonStyle = clsx('flexCenter w-full h-full', 'text-subText');
const deleteButtonStyle = clsx(
	'text-red-400 border-red-400 border flexCenter',
	'absolute right-0 bottom-0',
	'group/box group-hover/box:visible invisible',
	'w-5 h-5 rounded-full bg-white'
);

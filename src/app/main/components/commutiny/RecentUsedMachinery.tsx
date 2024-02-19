import customFetch from '@/api/customFetch';
import { UsedMachineryPost } from '@/type/post';
import { formatPriceToKRW } from '@/utils/price';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

async function getData() {
	try {
		const res = await customFetch<UsedMachineryPost[]>('/usedmachinery', {
			next: { revalidate: 10 },
		});
		return res;
	} catch (e) {}
}

export default async function RecentUsedMachinery() {
	const posts = await getData();
	return (
		<ul className={container}>
			{posts?.map((post) => (
				<li className={itemStyle} key={`used machinery ${post.id}`}>
					<Image
						className={imageStyle}
						src={post.imgURL}
						width={277}
						height={154}
						alt={post.title}
					/>
					<p>{post.title}</p>
					<p className="font-bold">{formatPriceToKRW(post.price)}</p>
				</li>
			))}
		</ul>
	);
}

// style
const container = clsx('flex gap-15px  p-15px flex-wrap');
const itemStyle = clsx('flex flex-col gap-y-2.5');
const imageStyle = clsx('w-[277px] h-[154px] rounded-10');

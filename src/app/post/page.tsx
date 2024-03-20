'use client';
import { getPost, getPosts } from '@/api/post/get';
import withLayout from '@/app/hoc/withLayout';
import PostBox from './conponents/PostBox';
import Fallback from './conponents/Fallback';
import { FullPost, Post } from '@/type/post';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// type Params = {
// 	id: string;
// };

// type Props = {
// 	params: Params;
// };

function Page() {
	const [post, setPost] = useState<FullPost>();

	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const fetchPost = async (id: string) => {
		console.log(id);
		const newPost = await getPost(Number(id));
		setPost(newPost);
	};
	useEffect(() => {
		id && fetchPost(id);
	}, [id]);
	return (
		<div>
			<section className="w-screen h-screen flex flex-col items-center lg:pt-[80px]">
				{post ? <PostBox post={post} /> : <Fallback />}
			</section>
		</div>
	);
}

// export const generateStaticParams = async (): Promise<Params[]> => {
// 	const res = await getPosts();

// 	// console.log(res);
// 	const posts = res?.data as Post[];
// 	return posts!.map((post) => ({
// 		id: post.id.toString(),
// 	}));
// };
export default withLayout(Page, true, false);

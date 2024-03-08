import { getPost, getPosts } from '@/api/post';
import withLayout from '@/app/hoc/withLayout';
import PostBox from './conponents/PostBox';
import Fallback from './conponents/Fallback';

export async function generateStaticParams() {
	const posts = await getPosts();
	if (!posts) return [];
	return posts.map((post) => ({
		id: post.id.toString(),
	}));
}

async function Page({ params }: { params: { id: string } }) {
	const { id } = params;
	const post = await getPost(id);
	return (
		<div>
			<section className="w-screen h-screen flex flex-col items-center lg:pt-[72px]">
				{post ? <PostBox post={post} /> : <Fallback />}
			</section>
		</div>
	);
}

export default withLayout(Page, true, false);

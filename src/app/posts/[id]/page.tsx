import { getPost, getPosts } from '@/api/post';
import withLayout from '@/app/hoc/withLayout';
import PostBox from './conponents/PostBox';
import Fallback from './conponents/Fallback';
import { Post } from '@/type/post';

type Params = {
	id: string;
};

type Props = {
	params: Params;
};
async function Page({ params }: Props) {
	const id = params.id;
	const post = await getPost(id);
	return (
		<div>
			<section className="w-screen h-screen flex flex-col items-center lg:pt-[80px]">
				{post ? <PostBox post={post} /> : <Fallback />}
			</section>
		</div>
	);
}

export const generateStaticParams = async (): Promise<Params[]> => {
	const res = await getPosts();

	// console.log(res);
	const posts = res?.data as Post[];
	return posts!.map((post) => ({
		id: post.id.toString(),
	}));
};
export default withLayout(Page, true, false);

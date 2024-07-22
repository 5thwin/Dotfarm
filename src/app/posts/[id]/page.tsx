import { getPost } from '@/api/post/get';
import withLayout from '@/app/hoc/withLayout';
import PostBox from './conponents/PostBox';
import Fallback from '../components/Fallback';
import { Metadata } from 'next';

type Params = {
	id: string;
};

type Props = {
	params: Params;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const id = Number(params.id);
	const post = await getPost(id);
	return {
		title: post?.title,
		description: post?.content,
	};
}

async function Page({ params }: Props) {
	const id = Number(params.id);
	const post = await getPost(id);
	return (
		<section className="w-screen size-full flex flex-col items-center lg:py-[124px]">
			{post ? <PostBox post={post} /> : <Fallback />}
		</section>
	);
}

export default withLayout(Page, true, false);

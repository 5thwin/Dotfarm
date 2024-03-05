import clsx from 'clsx';
import ComunityPostItem from '@/app/main/components/commutiny/CommunityPostItem';
import { PostWithUser } from '@/type/post';

type Props = {
	posts: PostWithUser[];
};

export default async function PostsList({ posts }: Props) {
	return (
		<ul className={container}>
			{posts.map((post, index) => (
				<ComunityPostItem key={`post${index}`} post={post} />
			))}
		</ul>
	);
}

// sty;le
const container = clsx('flex flex-col');

import { blockStyle } from '@/app/styles/common/blockStyle';
import PostsList from './PostsList';
import { PostWithUser } from '@/type/post';
import PostsPagination from './PostsPagination';
import clsx from 'clsx';
import MobileBackButton from '@/app/components/common/MobileBackButton';
import GoToWriteInput from '@/app/components/link/GoToWriteInput';

type Props = {
	posts: PostWithUser[];
};

export default function PostsWrapper({ posts }: Props) {
	return (
		<div className={responsiveWrapper}>
			<div className={responsiveHeader}>
				<div className="lg:hidden">
					<MobileBackButton />
				</div>
				<h1 className="font-bold text-2xl">영농 커뮤니티</h1>
			</div>
			<GoToWriteInput />
			<PostsList posts={posts} />
			<div className="flexCenter">
				<PostsPagination />
			</div>
		</div>
	);
}
// style
const responsiveWrapper = clsx(
	blockStyle,
	'rounded-none lg:rounded-30',
	'w-screen flex-1 2xl:w-[1150px]',
	'shadow-none lg:shadow-main',
	'flex flex-col gap-y-2.5'
);

const responsiveHeader = clsx('flex gap-x-2.5 items-center');

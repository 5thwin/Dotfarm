import clsx from 'clsx';
import ButtonGroups from './ButtonGroups';
import { Post } from '@/type/post';
import { getLikesCheck } from '@/api/user/likes/get';
import { padStart } from 'lodash';
import { format } from 'date-fns';

type Props = {
	post: Post;
};
export default async function PostHeader({ post }: Props) {
	const { category, title, createdAt } = post;
	const createDate = new Date(createdAt);
	const dateString = format(createDate, 'yyyy-mm-dd');
	const { isLiked } = await getLikesCheck(post.id);
	return (
		<div className="flex gap-2.5 lg:gap-x-10 items-center w-full justify-between flex-wrap">
			<div className="flex flex-col lg:gap-y-2.5">
				<span className={categoryText}>#{category}</span>
				<h1 className="text-lg lg:text-xl font-bold">{title}</h1>
				<span className="text-sm text-subText">{dateString}</span>
			</div>
			<ButtonGroups post={post} likeCheck={isLiked} />
		</div>
	);
}
// style
const categoryText = clsx('text-subText text-sm');

import clsx from 'clsx';
import ButtonGroups from './ButtonGroups';
import { Post } from '@/type/post';
import { getLikesCheck } from '@/api/user/likes/get';
import { padStart } from 'lodash';
import { format } from 'date-fns';
import { ableToEdit } from '@/utils/post/edit';

type Props = {
	post: Post;
};
export default async function PostHeader({ post }: Props) {
	const { category, title, createdAt } = post;
	const isAbleToEdit = await ableToEdit(post);
	const createDate = new Date(createdAt);
	const dateString = format(createDate, 'yyyy.MM.dd');
	const { isLiked } = await getLikesCheck(post.id);
	return (
		<div className="flex gap-2.5 lg:gap-x-10 items-center w-full justify-between flex-wrap">
			<div className="flex flex-col gap-y-2.5">
				<div className="flex justify-between items-center">
					<span className={categoryText}>#{category}</span>
					<ButtonGroups
						post={post}
						likeCheck={isLiked}
						isAbleToEdit={isAbleToEdit}
					/>
				</div>
				<h1 className="text-lg lg:text-xl font-bold">{title}</h1>
				<span className="text-sm text-subText">{dateString}</span>
			</div>
		</div>
	);
}
// style
const categoryText = clsx('text-subText text-sm');

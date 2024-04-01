import clsx from 'clsx';
import ButtonGroups from './ButtonGroups';
import { Post } from '@/type/post';

type Props = {
	post: Post;
};
export default function PostHeader({ post }: Props) {
	const { category, title, createdAt } = post;
	const dateString = new Date(createdAt).toLocaleDateString('Kr-kr');
	return (
		<div className="flex gap-x-10 items-center w-full justify-between">
			<div className="flex flex-col gap-y-2.5">
				<span className={categoryText}>#{category}</span>
				<h1 className="text-lg lg:text-xl font-bold">{title}</h1>
				<span className="text-sm text-subText">{dateString}</span>
			</div>
			<ButtonGroups post={post} />
		</div>
	);
}
// style
const categoryText = clsx('text-subText text-sm');

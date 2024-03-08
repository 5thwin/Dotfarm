import { FullPost } from '@/type/post';
import clsx from 'clsx';
import ButtonGroups from './ButtonGroups';

type Props = {
	post: FullPost;
};
export default function PostHeader({ post }: Props) {
	const { category, title, createdAt } = post;
	const dateString = new Date(createdAt).toLocaleDateString('Kr-kr');
	return (
		<div className="flex gap-x-10 items-center w-full justify-between">
			<div className="flex flex-col gap-y-2.5">
				<span className={categoryText}>#{category}</span>
				<p className="text-xl font-bold">{title}</p>
				<span className="text-sm text-subText">{dateString}</span>
			</div>
			<ButtonGroups />
		</div>
	);
}
// style
const categoryText = clsx('text-subText text-sm');

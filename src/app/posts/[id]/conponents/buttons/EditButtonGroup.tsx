import PostDeleteButton from './PostDeleteButton';
import PostEditButton from './PostEditButton';

type Props = {
	postId: number;
};
export default function EditButtonGroup({ postId }: Props) {
	return (
		<div className="flex gap-x-2.5 self-end">
			<PostEditButton postId={postId} />
			<PostDeleteButton postId={postId} />
		</div>
	);
}

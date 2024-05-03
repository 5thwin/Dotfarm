import Link from 'next/link';

type Props = {
	postId: number;
};
export default function PostEditButton({ postId }: Props) {
	return (
		<Link
			className="flex-1 hover:bg-gray-100 text-left px-4 py-2 text-sm font-medium text-gray-700"
			href={`/posts/create?id=${postId}`}
		>
			수정
		</Link>
	);
}

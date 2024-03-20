import Link from 'next/link';

type Props = {
	postId: number | string;
};
export default function PostEditButton({ postId }: Props) {
	return (
		<div className="self-end text-sm text-subText">
			<Link className="hover:text-gray-700" href={`/posts/create?id=${postId}`}>
				수정하기
			</Link>
		</div>
	);
}

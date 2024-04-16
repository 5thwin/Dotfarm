import Link from 'next/link';

type Props = {
	postId: number;
};
export default function PostEditButton({ postId }: Props) {
	return (
		<div className=" text-sm text-subText">
			<Link className="hover:text-gray-700" href={`/posts/create?id=${postId}`}>
				수정하기
			</Link>
		</div>
	);
}

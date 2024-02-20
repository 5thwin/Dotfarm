import customFetch from '@/api/customFetch';
import { QNAComment } from '@/type/qna';
import QNACommentItem from './QNACommentItem';

async function getData() {
	try {
		const res = await customFetch<QNAComment[]>('/qnacomments', {
			next: { revalidate: 10 },
		});
		return res;
	} catch (e) {}
}

export default async function QNAList() {
	const qnaComments = await getData();
	return (
		<ul className="flex flex-col">
			{qnaComments?.map((comment, index) => (
				<QNACommentItem key={`qna${comment.id}-${index}`} qna={comment} />
			))}
		</ul>
	);
}

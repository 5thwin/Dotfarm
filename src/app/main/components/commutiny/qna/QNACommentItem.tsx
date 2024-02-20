import { IcThumbUp } from '@/app/components/icons/IcThumbUp';
import { QNAComment } from '@/type/qna';
import clsx from 'clsx';

export default function QNACommentItem({ qna }: { qna: QNAComment }) {
	return (
		<div className={qnaWrapper}>
			<div className="flex flex-col gap-y-2.5">
				<div className="font-bold">{qna.userName}</div>
				<p>{qna.content}</p>
			</div>
			<button className={getLikeButtonStyle(qna.likedByUser)}>
				<IcThumbUp color={qna.likedByUser ? 'white' : undefined} />
				<span className="font-bold text-sm text-center flex-1">
					{qna.likes}
				</span>
			</button>
		</div>
	);
}
// style
const qnaWrapper = clsx('p-5 flex justify-between items-center');
const getLikeButtonStyle = (likedByUser: boolean) =>
	clsx(
		'rounded-full px-[14px] py-2.5 flex justify-between gap-x-2.5 items-end w-[72px]',
		{
			'bg-subGray text-subText': !likedByUser,
			'bg-mainGreen text-white': likedByUser,
		}
	);

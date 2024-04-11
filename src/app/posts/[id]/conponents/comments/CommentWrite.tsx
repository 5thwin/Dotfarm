'use client';
import { createComment } from '@/api/post/comments/create';
import Toast from '@/app/components/common/Toast';
import clsx from 'clsx';
import React, { useRef } from 'react';

import { useRouter } from 'next/navigation';
import useHandleError from '@/hooks/useHandleError';
import useParentCommentStore from '../../store/parentCommentStore';

type Props = {
	postId: number;
};
export default function CommentWrite({ postId }: Props) {
	const { parentComment, setParentComment } = useParentCommentStore();
	const parentId = parentComment?.id; //부모댓글의 아이디
	const inputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();
	const { handleError } = useHandleError();
	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const contents = inputRef.current?.value;
		if (!contents) {
			Toast.fire({ title: '내용이 입력되지 않았습니다.', icon: 'warning' });
			return;
		}
		try {
			const res = await createComment(postId, contents, parentId);
		} catch (error) {
			if (error instanceof Error) {
				handleError({ error });
			}
		}
		inputRef.current.value = '';
	};
	const handleEraseReply = () => setParentComment();
	return (
		<div className="flex flex-col gap-y-5px">
			<form className={CommentWrapper} onSubmit={onSubmit}>
				<label htmlFor="comment-input" className="sr-only" />
				{parentComment && (
					<button onClick={handleEraseReply}>
						<span className="text-mainGreen">
							@{parentComment.author.nickname}
						</span>
					</button>
				)}
				<input
					ref={inputRef}
					id="comment-input"
					className={InputStyle}
					placeholder="한마디 작성해주세요"
				/>
				<button type="submit" className={buttonStyle}>
					입력하기
				</button>
			</form>
		</div>
	);
}

// style
const CommentWrapper = clsx(
	'bg-subGray rounded-full flex px-5 py-[15px] gap-x-5px items-center'
);
const InputStyle = clsx('bg-transparent flex-1 outline-none');
const buttonStyle = clsx(
	'flexCenter whitespace-nowrap py-5px w-[72px]',
	'bg-mainGreen text-white rounded-full',
	'font-bold text-sm'
);

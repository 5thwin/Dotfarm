'use client';
import { createComment } from '@/api/post/comments/create';
import Toast from '@/app/components/common/Toast';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

import useHandleError from '@/hooks/useHandleError';
import useParentCommentStore from '../../store/parentCommentStore';
import { isErrorObject } from '@/utils/error/httpError';
import LoadingSpinner from '@/app/components/LoadingSpinner';

type Props = {
	postId: number;
	isLogined?: boolean;
};
export default function CommentWrite({ postId, isLogined = true }: Props) {
	const { parentComment, setParentComment } = useParentCommentStore();
	useEffect(() => {
		setParentComment();
	}, []);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const parentId = parentComment?.id; //부모댓글의 아이디
	const inputRef = useRef<HTMLInputElement>(null);
	const { handleError } = useHandleError();
	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const contents = inputRef.current?.value;
		if (!contents) {
			Toast.fire({ title: '내용이 입력되지 않았습니다.', icon: 'warning' });
			return;
		}
		try {
			setIsLoading(true);
			const res = await createComment(postId, contents, parentId);
			if (isErrorObject(res)) {
				throw new Error(JSON.stringify(res));
			}
		} catch (error) {
			if (error instanceof Error) {
				handleError({ error });
			}
		} finally {
			setIsLoading(false);
			inputRef.current.value = '';
		}
	};
	const handleEraseReply = () => setParentComment();
	return (
		<div className="flex flex-col gap-y-5px">
			<form className={CommentWrapper} onSubmit={onSubmit}>
				<label htmlFor="comment-input" className="sr-only" />
				{parentComment && (
					<button onClick={handleEraseReply} type="button">
						<span className="text-mainGreen">
							@{parentComment.author.nickname}
						</span>
					</button>
				)}
				<input
					ref={inputRef}
					id="comment-input"
					className={InputStyle}
					autoComplete="off"
					placeholder={
						isLogined ? '한마디 작성해주세요' : '로그인이 필요합니다.'
					}
					disabled={!isLogined || isLoading}
				/>
				<button type="submit" className={buttonStyle}>
					{isLoading ? <LoadingSpinner size={16} color="white" /> : '입력하기'}
				</button>
			</form>
		</div>
	);
}

// style
const CommentWrapper = clsx(
	'bg-subGray rounded-full flex px-2.5 sm:px-5 py-[15px] gap-x-5px items-center'
);
const InputStyle = clsx('bg-transparent flex-1 outline-none');
const buttonStyle = clsx(
	'flexCenter whitespace-nowrap py-5px w-[72px]',
	'bg-mainGreen text-white rounded-full',
	'font-bold text-sm'
);

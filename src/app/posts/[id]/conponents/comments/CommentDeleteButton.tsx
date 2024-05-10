'use client';

import { deleteComment } from '@/api/post/comments/delete';
import { colorWarnRed } from '@/constants/color';
import useHandleError from '@/hooks/useHandleError';
import { isErrorObject } from '@/utils/error/httpError';
import clsx from 'clsx';
import Swal from 'sweetalert2';

type Props = { postId: number; commentId: number };

export default function CommentDeleteButton({ postId, commentId }: Props) {
	const { handleError } = useHandleError();
	const handleDelete = async () => {
		Swal.fire({
			title: '댓글을 삭제할까요?',
			confirmButtonText: '네 삭제합니다.',
			showCancelButton: true,
			cancelButtonText: '아니요',
			confirmButtonColor: colorWarnRed,
			focusCancel: true,
			customClass: {
				title: clsx('text-xl lg:text-2xl text-center break-keep'),
				confirmButton: clsx('order-2'),
				cancelButton: 'order-1',
			},
		}).then(async (result) => {
			if (result.isConfirmed) {
				try {
					const res = await deleteComment(postId, commentId);
					if (isErrorObject(res)) {
						throw Error(JSON.stringify(res));
					}
				} catch (error) {
					if (error instanceof Error) {
						handleError({ error });
					}
				}
			}
		});
	};
	return (
		<button
			onClick={handleDelete}
			className={clsx('text-xs font-bold text-subText hover:text-warnRed')}
		>
			삭제
		</button>
	);
}

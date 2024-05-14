'use client';

import { deletePost } from '@/api/post/delete';
import Toast from '@/app/components/common/Toast';
import { colorWarnRed } from '@/constants/color';
import useHandleError from '@/hooks/useHandleError';
import { isErrorObject } from '@/utils/error/httpError';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

type Props = { postId: number };
export default function PostDeleteButton({ postId }: Props) {
	const { handleError } = useHandleError();
	const router = useRouter();
	const handleClick = async () => {
		Swal.fire({
			title: '정말로 삭제하실껀가요?',
			text: '게시글을 삭제하면 되돌릴 수 없습니다.',
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
					const res = await deletePost({ postId });
					if (isErrorObject(res)) {
						throw Error(JSON.stringify(res));
					}
					router.push('/');
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
			className="flex-1 hover:bg-gray-100 text-left px-4 py-2 text-sm font-medium text-gray-700"
			onClick={handleClick}
		>
			삭제
		</button>
	);
}

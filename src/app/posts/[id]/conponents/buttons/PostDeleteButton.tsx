'use client';

import { deletePost } from '@/api/post/delete';
import Toast from '@/app/components/common/Toast';
import useHandleError from '@/hooks/useHandleError';
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
			confirmButtonColor: 'rgb(248 113 113)',
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
					router.push('/main');
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
			className="text-sm text-subText hover:text-red-500"
			onClick={handleClick}
		>
			삭제하기
		</button>
	);
}

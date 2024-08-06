'use client';
import { createMyInterest } from '@/api/user/interest/create';
import { deleteMyInterest } from '@/api/user/interest/delete';
import Toast from '@/app/components/common/Toast';
import useHandleError from '@/hooks/useHandleError';
import { SupportProgram } from '@/type/support';
import { isErrorObject } from '@/utils/error/httpError';
import { useState } from 'react';
import IcLike from '@/../public/icon/like.svg';
import { colorMainGreen } from '@/constants/color';

type Props = {
	support: SupportProgram;
};
export default function SupportInterestButton({ support }: Props) {
	const { handleError } = useHandleError();
	const [isInterested, setIsInterested] = useState<boolean>(
		support.isInterested || false
	);
	const [isPending, setIsPending] = useState<boolean>(false);
	const handleInterest = async () => {
		const previosIsInterested = isInterested;
		setIsInterested((pre) => !pre);
		try {
			if (!previosIsInterested) {
				setIsPending(true);
				const res = await createMyInterest({ supportId: support.id });
				setIsPending(false);
				if (isErrorObject(res)) {
					throw new Error(JSON.stringify(res));
				}
			} else {
				setIsPending(true);
				const res = await deleteMyInterest({ supportId: support.id });
				setIsPending(false);

				if (isErrorObject(res)) {
					throw new Error(JSON.stringify(res));
				}
			}
		} catch (error) {
			if (error instanceof Error) {
				const defaultHandler = () =>
					Toast.fire({
						title: '관심 지원사업에 등록하지 못했습니다',
						text: '잠시 후 다시 시도해주세요',
						icon: 'error',
					});
				handleError({ error, defaultHandler });
			}
		}
		setIsPending(false);
	};

	return (
		<button
			className="flexCenter gap-x-2.5 text-subText flex-1"
			onClick={handleInterest}
			disabled={isPending}
		>
			<IcLike
				width="19"
				height="18"
				stroke={isInterested ? 'white' : '#7D7B7B'}
				fill={isInterested ? colorMainGreen : 'none'}
				strokeWidth="1.5"
				strokePosition="inside"
			/>
			<p className="text-subText font-bold text-xs">좋아요</p>
		</button>
	);
}

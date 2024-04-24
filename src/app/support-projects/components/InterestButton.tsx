'use client';
import clsx from 'clsx';
import IcLike from '@/../public/icon/like.svg';
import useHandleError from '@/hooks/useHandleError';
import { useState } from 'react';
import { SupportProgram } from '@/type/support';
import { createMyInterest } from '@/api/user/interest/create';
import { isErrorObject } from '@/utils/error/httpError';
import { deleteMyInterest } from '@/api/user/interest/delete';
import Toast from '@/app/components/common/Toast';

type Props = {
	program: SupportProgram;
};

export default function InterestButton({ program }: Props) {
	const { handleError } = useHandleError();
	const [isInterested, setIsInterested] = useState<boolean>(
		program.isInterested || false
	);
	const [isPending, setIsPending] = useState<boolean>(false);
	const handleInterest = async () => {
		const previosIsInterested = isInterested;
		setIsInterested((pre) => !pre);
		try {
			if (!previosIsInterested) {
				setIsPending(true);
				const res = await createMyInterest({ supportId: program.id });
				setIsPending(false);
				if (isErrorObject(res)) {
					throw new Error(JSON.stringify(res));
				}
			} else {
				setIsPending(true);
				const res = await deleteMyInterest({ supportId: program.id });
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
			className={getButtonStyle(isInterested)}
			onClick={handleInterest}
			disabled={isPending}
		>
			<IcLike
				width="15"
				height="13"
				stroke={isInterested ? 'white' : '#7D7B7B'}
				fill={isInterested ? 'white' : 'none'}
			/>
		</button>
	);
}

// style
const getButtonStyle = (isInterested: boolean) =>
	clsx('rounded-full flexCenter min-w-[37px] size-[37px]', {
		'bg-mainGreen': isInterested,
		'bg-subGray': !isInterested,
	});

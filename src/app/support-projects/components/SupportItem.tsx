import { calculateDday } from '@/utils/date/compare';
import IcLike from '@/../public/icon/like.svg';
import clsx from 'clsx';
import Link from 'next/link';
import { SupportProgram } from '@/type/support';
import { useState } from 'react';
import { createMyInterest } from '@/api/user/interest/create';
import { deleteMyInterest } from '@/api/user/interest/delete';
import Toast from '@/app/components/common/Toast';
import { getRecruitmentStatus } from '@/utils/supportPrograms';
import useHandleError from '@/hooks/useHandleError';
import { getMe } from '@/utils/localstorage';
import { isErrorObject } from '@/utils/error/httpError';

export default function SupportProgramItem({
	program,
}: {
	program: SupportProgram;
}) {
	const me = getMe();
	const { handleError } = useHandleError();
	const [isInterested, setIsInterested] = useState<boolean>(false);
	const handleInterest = async () => {
		const previosIsInterested = isInterested;
		setIsInterested((pre) => !pre);
		try {
			if (!previosIsInterested) {
				const res = await createMyInterest({ supportId: program.id });
				if (isErrorObject(res)) {
					throw new Error(JSON.stringify(res));
				}
			} else {
				const res = await deleteMyInterest({ supportId: program.id });
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
	};
	const recruitmentStatus = getRecruitmentStatus(program);
	const recruitmentStatusString = (() => {
		if (recruitmentStatus === 'IS_ALWAYS') return '상시 모집';
		if (recruitmentStatus === 'IS_CLOSED') return '마감';
		return '모집중';
	})();
	return (
		<li className="flex justify-between items-center gap-x-2.5 lg:gap-x-10">
			<div
				className={clsx('flex flex-col gap-y-2.5 whitespace-pre-wrap', {
					'opacity-30': recruitmentStatus === 'IS_CLOSED',
				})}
			>
				<div className="flex gap-x-5px flex-wrap gap-y-1">
					<span
						className={clsx(defaultSupportTag, {
							'bg-lineColor': recruitmentStatus === 'IS_ALWAYS',
							'bg-[#FECBBB]': recruitmentStatus === 'IS_CLOSED',
							'bg-subGreen': recruitmentStatus === 'IS_RECRUITING',
						})}
					>
						{recruitmentStatusString}
					</span>
					<span className={clsx(defaultSupportTag)}>{program.category}</span>
					{recruitmentStatus === 'IS_RECRUITING' && (
						<span className={clsx(defaultSupportTag)}>
							D-{calculateDday(program.deadline)}
						</span>
					)}
					{recruitmentStatus !== 'IS_ALWAYS' && (
						<span className={clsx(defaultSupportTag)}>
							~
							{new Date(program.deadline)
								.toLocaleDateString()
								.replaceAll('-', '.')}
						</span>
					)}
				</div>
				<Link href={program.link} className={programNameStyle}>
					{program.programName}
				</Link>
				<p className={contentStyle}>{program.content}</p>
			</div>
			{me && (
				<button
					className={getButtonStyle(isInterested)}
					onClick={handleInterest}
				>
					<IcLike
						width="15"
						height="13"
						stroke={isInterested ? 'white' : '#7D7B7B'}
						fill={isInterested ? 'white' : 'none'}
					/>
				</button>
			)}
		</li>
	);
}

// style
const defaultSupportTag = clsx(
	'rounded-10 px-[7px] py-5px',
	'text-sm font',
	'bg-subGray'
);

const programNameStyle = clsx('lg:text-xl font-bold hover:underline');
const contentStyle = clsx('text-wrap text-sm lg:text-base');
// style
const getButtonStyle = (isInterested: boolean) =>
	clsx('rounded-full flexCenter min-w-[37px] size-[37px]', {
		'bg-mainGreen': isInterested,
		'bg-subGray': !isInterested,
	});

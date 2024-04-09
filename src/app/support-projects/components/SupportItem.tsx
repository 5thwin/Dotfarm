import { calculateDday } from '@/utils/date/compare';
import IcLike from '@/../public/icon/like.svg';
import clsx from 'clsx';
import Link from 'next/link';
import { SupportProgram } from '@/type/support';
import { useState } from 'react';
import { colorMainGreen } from '@/constants/color';
import { createMyInterest } from '@/api/user/interest/create';
import { deleteMyInterest } from '@/api/user/interest/delete';
import Toast from '@/app/components/common/Toast';

export default function SupportProgramItem({
	program,
}: {
	program: SupportProgram;
}) {
	const dDay = calculateDday(program.deadline);
	const [isInterested, setIsInterested] = useState<boolean>(false);
	const handleInterest = async () => {
		const previosIsInterested = isInterested;
		setIsInterested((pre) => !pre);
		try {
			if (!previosIsInterested) {
				await createMyInterest({ supportId: program.id });
			} else await deleteMyInterest({ supportId: program.id });
		} catch (error) {
			Toast.fire({
				title: '관심 지원사업에 등록하지 못했습니다',
				text: '잠시 후 다시 시도해주세요',
				icon: 'error',
			});
		}
	};
	return (
		<li className="flex justify-between items-center gap-x-10">
			<div className="flex flex-col gap-y-2.5 whitespace-pre-wrap">
				<div className="flex gap-x-5px flex-wrap gap-y-1">
					<span
						className={clsx(defaultSupportTag, {
							'bg-subGreen': program.recruitmentStatus === '모집중',
							'bg-[#FECBBB]': program.recruitmentStatus === '마감',
						})}
					>
						{program.recruitmentStatus}
					</span>
					<span className={clsx(defaultSupportTag)}>{program.category}</span>
					{dDay > 0 && (
						<span className={clsx(defaultSupportTag)}>
							D-{calculateDday(program.deadline)}
						</span>
					)}
					<span className={clsx(defaultSupportTag)}>
						~
						{new Date(program.deadline)
							.toLocaleDateString()
							.replaceAll('-', '.')}
					</span>
				</div>
				<Link href={program.link} className={programNameStyle}>
					{program.programName}
				</Link>
				<p className={contentStyle}>{program.content}</p>
			</div>
			<button className={buttonStyle} onClick={handleInterest}>
				<IcLike
					width="15"
					height="13"
					stroke={isInterested ? '#7D7B7B' : colorMainGreen}
					fill={isInterested ? 'none' : colorMainGreen}
				/>
			</button>
		</li>
	);
}

// style
const defaultSupportTag = clsx(
	'rounded-10 px-[7px] py-5px',
	'bg-subGray',
	'text-sm font'
);

const programNameStyle = clsx('lg:text-xl font-bold hover:underline');
const contentStyle = clsx('text-wrap text-sm lg:text-base');
// style
const buttonStyle = clsx(
	'rounded-full bg-subGray flexCenter min-w-[37px] size-[37px]'
);

'use client';
import { calculateDday } from '@/utils/date/compare';
import clsx from 'clsx';
import Link from 'next/link';
import { SupportProgram } from '@/type/support';
import { getRecruitmentStatus } from '@/utils/supportPrograms';
import { format } from 'date-fns';
import InterestButton from './InterestButton';
import { getMe } from '@/utils/localstorage';
import { useEffect, useState } from 'react';
import { UserPartial } from '@/type/user';

export default function SupportProgramItem({
	program,
	interestButton = true,
}: {
	program: SupportProgram;
	interestButton?: boolean;
}) {
	const [me, setMe] = useState<UserPartial | null>(null);
	useEffect(() => {
		const me = getMe();
		me && setMe(me);
	}, []);

	const recruitmentStatus = getRecruitmentStatus(program);
	const recruitmentStatusString = (() => {
		if (recruitmentStatus === 'IS_ALWAYS') return '상시 모집';
		if (recruitmentStatus === 'IS_CLOSED') return '마감';
		return '모집중';
	})();
	const deadLineDate = new Date(program.deadline);
	return (
		<Link
			href={`/supports/${program.id}`}
			className="flex justify-between items-center gap-x-2.5 lg:gap-x-10"
		>
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
					{/* <span className={clsx(defaultSupportTag)}>{program.category}</span> */}
					{recruitmentStatus === 'IS_RECRUITING' && (
						<span className={clsx(defaultSupportTag)}>
							D-{calculateDday(program.deadline)}
						</span>
					)}
					{recruitmentStatus !== 'IS_ALWAYS' && (
						<span className={clsx(defaultSupportTag)}>
							~{format(deadLineDate, 'yy.MM.dd')}
						</span>
					)}
				</div>
				<p className={programNameStyle}>{program.programName}</p>
			</div>
			{me && interestButton && <InterestButton program={program} />}
		</Link>
	);
}

// style
const defaultSupportTag = clsx(
	'rounded-10 px-[7px] py-5px',
	'text-sm font',
	'bg-subGray'
);

const programNameStyle = clsx('font-bold hover:underline');
// const contentStyle = clsx('text-wrap text-sm lg:text-base line-clamp-2');

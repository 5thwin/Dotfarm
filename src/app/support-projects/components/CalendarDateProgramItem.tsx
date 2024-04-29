import { SupportProgram } from '@/type/support';
import { calculateDday } from '@/utils/date/compare';
import { getRecruitmentStatus } from '@/utils/supportPrograms';
import clsx from 'clsx';

type Props = { program: SupportProgram };

export default function CalendarDateProgramItem({ program }: Props) {
	const recruitmentStatus = getRecruitmentStatus(program);
	return (
		<li className={listStyle}>
			<div>
				{recruitmentStatus === 'IS_RECRUITING' && (
					<span className="text-mainGreen font-bold text-sm whitespace-nowrap">
						{`D-${calculateDday(program.deadline)}`}
					</span>
				)}
				{recruitmentStatus === 'IS_CLOSED' && (
					<span className="text-warnRed font-bold text-sm whitespace-nowrap">
						마감
					</span>
				)}
				{recruitmentStatus === 'IS_ALWAYS' && (
					<span className="text-subText font-bold text-sm whitespace-nowrap">
						상시
					</span>
				)}
			</div>
			<p
				className={clsx('text-sm line-clamp-2', {
					'text-lineColor': recruitmentStatus === 'IS_CLOSED',
				})}
			>
				{program.programName}
			</p>
		</li>
	);
}
// style
const listStyle = clsx('flex gap-x-2.5 items-center');

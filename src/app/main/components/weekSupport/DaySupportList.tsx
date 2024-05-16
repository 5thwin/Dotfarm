import TooltipWrapper from '@/app/components/common/TooltipWrapper';
import DdayBadge from '@/app/support-projects/components/DdayBadge';
import { SupportProgram } from '@/type/support';
import { getRecruitmentStatus } from '@/utils/supportPrograms';
import Link from 'next/link';

export default function DaySupportList({
	supportPrograms,
}: {
	supportPrograms: SupportProgram[];
}) {
	return (
		<ul className="flex flex-col gap-y-2">
			{supportPrograms.slice(0, 3).map((program, index) => (
				<li className="flex" key={`support${index}`}>
					<Link
						href={program.link}
						target="_blank"
						className="flex gap-x-5px text-sm"
					>
						{getRecruitmentStatus(program) === 'IS_RECRUITING' && (
							<DdayBadge deadline={program.deadline} />
						)}
						{getRecruitmentStatus(program) === 'IS_ALWAYS' && (
							<span className="text-subText font-bold text-sm whitespace-nowrap">
								상시 모집
							</span>
						)}
						<TooltipWrapper
							id={`tooltip-${program.id}`}
							className="line-clamp-2 hover:underline"
							contents={program.programName}
						/>
					</Link>
				</li>
			))}
		</ul>
	);
}

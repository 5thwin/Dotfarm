import { SupportProgram } from '@/type/support';
import { calculateDday } from '@/utils/date/compare';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
	supportPrograms: SupportProgram[];
};
export default function SupportList({ supportPrograms }: Props) {
	return (
		<ul className="flex flex-col gap-y-[55px]">
			{supportPrograms.map((program, index) => (
				<SupportProgramItem key={`modal_list_${index}`} program={program} />
			))}
		</ul>
	);
}

function SupportProgramItem({ program }: { program: SupportProgram }) {
	const dDay = calculateDday(program.deadline);
	return (
		<li className="flex flex-col gap-y-2.5">
			<div className="flex gap-x-5px">
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
					~{program.deadline.replaceAll('-', '.')}
				</span>
			</div>
			<Link href={program.link} className="text-xl font-bold hover:underline">
				{program.programName}
			</Link>
			<p className="text-wrap">{program.content}</p>
		</li>
	);
}
// style
const defaultSupportTag = clsx(
	'rounded-10 px-[7px] py-5px',
	'bg-subGray',
	'text-sm font'
);

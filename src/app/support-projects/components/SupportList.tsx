import { SupportProgram } from '@/type/support';
import { calculateDday } from '@/utils/date/compare';
import IcLike from '@/../public/icon/like.svg';
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
			<button className={buttonStyle}>
				<IcLike width="15" height="13" stroke="#7D7B7B" />
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
const buttonStyle = clsx('rounded-full bg-subGray flexCenter size-[37px]');

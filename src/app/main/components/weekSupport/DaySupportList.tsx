import { SupportProgram } from '@/type/support';
import Link from 'next/link';

export default function DaySupportList({
	supportPrograms,
}: {
	supportPrograms: SupportProgram[];
}) {
	return (
		<ul className="flex flex-col gap-y-2">
			{supportPrograms.slice(0, 3).map((program) => (
				<li className="flex">
					<Link href={program.link} target="_blank" className="">
						<span className="line-clamp-3">• {program.programName}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}

import { SupportProgram } from '@/type/support';
import Link from 'next/link';

export default function DaySupportList({
	supportPrograms,
}: {
	supportPrograms: SupportProgram[];
}) {
	return (
		<ul className="flex flex-col gap-y-2 list-disc list-inside">
			{supportPrograms.slice(0, 3).map((program) => (
				<li className="">
					<Link href={program.link} target="_blank">
						{program.programName}
					</Link>
				</li>
			))}
		</ul>
	);
}

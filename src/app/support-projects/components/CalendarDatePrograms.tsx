import { SupportProgram } from '@/type/support';
import clsx from 'clsx';

type Props = { programs: SupportProgram[] };
export default function CalendarDatePrograms({ programs }: Props) {
	return (
		<div className="flex flex-col gap-y-2.5">
			<ul className={clsx('flex flex-col gap-y-2.5')}>
				{programs.slice(0, 2).map((program, index) => (
					<li key={`program_${index}`}>
						<p className="text-sm line-clamp-2">{program.programName}</p>
					</li>
				))}
			</ul>
			{programs.length > 2 && (
				<span className="text-mainGreen text-sm font-bold text-center">
					외 {programs.length - 2}건 +
				</span>
			)}
		</div>
	);
}

import { SupportProgram } from '@/type/support';
import clsx from 'clsx';
import CalendarDateProgramItem from './CalendarDateProgramItem';

type Props = { programs: SupportProgram[] };
export default function CalendarDatePrograms({ programs }: Props) {
	return (
		<div className="flex flex-col gap-y-2.5">
			<ul className={clsx('flex flex-col gap-y-2.5')}>
				{programs.slice(0, 2).map((program, index) => (
					<CalendarDateProgramItem key={`program_${index}`} program={program} />
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

import { SupportProgram } from '@/type/support';
import SupportProgramItem from './SupportItem';
import { sortPrograms } from '@/utils/supportPrograms';

type Props = {
	supportPrograms: SupportProgram[];
};
export default function SupportList({ supportPrograms }: Props) {
	const sortedPrograms = sortPrograms(supportPrograms);
	return (
		<ul className="flex flex-col gap-y-[55px]">
			{sortedPrograms.map((program, index) => (
				<SupportProgramItem key={`modal_list_${index}`} program={program} />
			))}
		</ul>
	);
}

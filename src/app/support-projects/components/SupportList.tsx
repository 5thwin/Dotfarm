import { SupportProgram } from '@/type/support';
import SupportProgramItem from './SupportItem';

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

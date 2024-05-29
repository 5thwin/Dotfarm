import { SupportProgram } from '@/type/support';
import { formatDate } from 'date-fns';
import SupportProgramItem from '../SupportProgramItem';

type Props = {
	date: Date;
	supports: SupportProgram[];
};
export default function SupportsDatePage({ date, supports }: Props) {
	return (
		<div className="flex flex-col gap-y-15px">
			<div className="flex gap-x-15px items-center">
				<h3 className="text-xl font-bold">{formatDate(date, 'M월 d일')}</h3>
				<span className="text-mainGreen font-bold">{supports.length}건</span>
			</div>
			<ul className="flex flex-col gap-y-30px">
				{supports.map((support, index) => (
					<SupportProgramItem key={`support-${index}`} program={support} />
				))}
			</ul>
		</div>
	);
}

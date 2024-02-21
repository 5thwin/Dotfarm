import Modal from '@/app/components/common/Modal';
import useSelectedDateStore from '../../store/selectedDateStore';
import { SupportProgram } from '@/type/support';
import useModalSupportsStore from '../../store/modalSupportsStore';
import clsx from 'clsx';
import { calculateDday } from '@/utils/date/compare';

export default function SupportListModal() {
	const { setSelectedDate } = useSelectedDateStore();
	const { supportPrograms, setSupportPrograms } = useModalSupportsStore();
	const onClose = () => {
		setSelectedDate(undefined);
		setSupportPrograms(undefined);
	};
	return (
		<Modal
			onClose={onClose}
			containerClass={clsx('max-w-[640px]', 'p-[25px] rounded-30')}
		>
			<div className="flex gap-y-25px flex-col">
				<h2 className="text-2xl font-bold">지원사업 & 교육 일정</h2>
				<ul className="flex flex-col gap-y-[55px]">
					{supportPrograms &&
						supportPrograms.map((program, index) => (
							<SupportProgramItem
								key={`modal_list_${index}`}
								program={program}
							/>
						))}
				</ul>
			</div>
		</Modal>
	);
}

function SupportProgramItem({ program }: { program: SupportProgram }) {
	const dDay = calculateDday(program.deadline);
	return (
		<li className="flex flex-col gap-y-2.5">
			<div className="flex gap-x-5px">
				<span className={clsx(defaultSupportTag)}>
					{program.recruitmentStatus}
				</span>
				<span className={clsx(defaultSupportTag)}>{program.category}</span>
				{dDay > 0 && (
					<span className={clsx(defaultSupportTag)}>
						D-{calculateDday(program.deadline)}
					</span>
				)}
				<span className={clsx(defaultSupportTag)}>~{program.deadline}</span>
			</div>
			<p className="text-xl font-bold">{program.programName}</p>
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

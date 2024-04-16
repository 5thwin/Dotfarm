import Modal from '@/app/components/common/Modal';
import useSelectedDateStore from '../../store/selectedDateStore';
import useModalSupportsStore from '../../store/modalSupportsStore';
import clsx from 'clsx';
import SupportList from '../SupportList';

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
			containerClass={clsx(
				'max-w-[640px]',
				'p-[25px] rounded-30',
				'max-h-[90vh]'
			)}
		>
			<div className="flex gap-y-25px flex-col">
				<h2 className="text-2xl font-bold">지원사업 & 교육 일정</h2>
				{supportPrograms && <SupportList supportPrograms={supportPrograms} />}
			</div>
		</Modal>
	);
}

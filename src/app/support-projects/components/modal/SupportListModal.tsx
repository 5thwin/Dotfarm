import Modal from '@/app/components/common/Modal';
import useSelectedDateStore from '../../store/selectedDateStore';

export default function SupportListModal() {
	const { setSelectedDate } = useSelectedDateStore();
	const onClose = () => setSelectedDate(undefined);
	return <Modal onClose={onClose}></Modal>;
}

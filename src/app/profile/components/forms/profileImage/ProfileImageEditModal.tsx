'use client';
import Modal from '@/app/components/common/Modal';
import ProfileImageEditForm from './ProfileImageEditForm';

type Props = {
	onClose: () => void;
};
export default function ProfileImageEditModal(props: Props) {
	const { onClose } = props;
	return (
		<Modal onClose={onClose} closeButton={false}>
			<ProfileImageEditForm onClose={onClose} />
		</Modal>
	);
}

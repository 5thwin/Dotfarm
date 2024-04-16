'use client';
import Modal from '@/app/components/common/Modal';
import useProfileStore from '@/app/profile/store/profileStore';
import ProfileImageEditForm from './ProfileImageEditForm';

type Props = {
	onClose: () => void;
};
export default function ProfileImageEditModal(props: Props) {
	const { onClose } = props;
	return (
		<Modal onClose={onClose}>
			<ProfileImageEditForm onClose={onClose} />
		</Modal>
	);
}

import { getUserIdByAccessToken } from '@/api/auth/token/utils';
import withLayout from '../hoc/withLayout';
import ProfileEditBox from './components/ProfileEditBox';

function ProfilePage() {
	const userId = getUserIdByAccessToken();

	return (
		<div>
			<section className="w-screen h-screen flexCenter">
				<ProfileEditBox userId={Number(userId)} />
			</section>
		</div>
	);
}
export default withLayout(ProfilePage, true, false);

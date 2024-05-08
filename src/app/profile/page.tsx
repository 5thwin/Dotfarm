import { Metadata } from 'next';
import withLayout from '../hoc/withLayout';
import ProfileEditBox from './components/ProfileEditBox';

export const metadata: Metadata = {
	title: '프로필',
};
function ProfilePage() {
	return (
		<div>
			<section className="w-screen h-screen flexCenter">
				<ProfileEditBox />
			</section>
		</div>
	);
}
export default withLayout(ProfilePage, true, false);

import withLayout from '../hoc/withLayout';
import ProfileEditBox from './components/ProfileEditBox';

function ProfilePage() {
	return (
		<div>
			<section className="w-screen h-screen flexCenter">
				{/* @ts-expect-error Server Component */}
				<ProfileEditBox />
			</section>
		</div>
	);
}
export default withLayout(ProfilePage, true, false);

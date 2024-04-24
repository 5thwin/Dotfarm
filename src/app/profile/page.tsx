import withLayout from '../hoc/withLayout';
import MyPageBox from './components/MyPageBox';

function ProfilePage() {
	return (
		<div>
			<section className="w-screen h-screen flexCenter">
				<MyPageBox />
			</section>
		</div>
	);
}
export default withLayout(ProfilePage, true, false);

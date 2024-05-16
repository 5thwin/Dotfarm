import { Metadata } from 'next';
import withLayout from '../hoc/withLayout';
import MyPageBox from './components/MyPageBox';

export const metadata: Metadata = {
	title: '프로필',
};
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

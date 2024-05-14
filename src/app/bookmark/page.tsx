import withLayout from '@/app/hoc/withLayout';
import { Metadata } from 'next';
import BookmarkBox from './components/BookmarkBox';

export const metadata: Metadata = {
	title: '관심목록',
};
function Page() {
	return (
		<div>
			<section className="w-screen h-screen flexCenter">
				<BookmarkBox />
			</section>
		</div>
	);
}
export default withLayout(Page, true, false, false);

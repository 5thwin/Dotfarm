import withLayout from '@/app/hoc/withLayout';
import { Metadata } from 'next';
import BookmarkBox from './components/BookmarkBox';

export const metadata: Metadata = {
	title: '관심목록',
};
function Page() {
	return (
		<section className="w-screen lg:py-[120px] flex justify-center">
			<BookmarkBox />
		</section>
	);
}
export default withLayout(Page, true, false, false);

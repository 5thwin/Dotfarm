import clsx from 'clsx';
import withLayout from '../hoc/withLayout';
import CalendarWrapper from './components/CalendarWrapper';
import MobileBackButton from '../components/common/MobileBackButton';

function SupportPage() {
	return (
		<div className={responsivePageContainer}>
			<div className="flex items-center">
				<div className="lg:hidden">
					<MobileBackButton />
				</div>
				<h1 className={headTextStyle}>농업 지원사업 & 교육</h1>
			</div>
			<CalendarWrapper />
		</div>
	);
}
export default withLayout(SupportPage, true);

// style
const responsivePageContainer = clsx(
	'mx-auto lg:my-[127px] xl:px-[161px] flex flex-col gap-y-5',
	'p-5 lg:py-0'
);
const headTextStyle = clsx('lg:text-3xl text-xl font-bold');

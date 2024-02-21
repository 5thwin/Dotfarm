import clsx from 'clsx';
import withLayout from '../hoc/withLayout';
import CalendarWrapper from './components/CalendarWrapper';

function SupportPage() {
	return (
		<div className="mx-auto my-[127px] md:px-[161px] flex flex-col gap-y-5">
			<h1 className="font-bold text-3xl">농업 지원사업 & 교육</h1>
			{/* @ts-expect-error Server Component */}
			<CalendarWrapper />
		</div>
	);
}
export default withLayout(SupportPage, true);

import MobileBackButton from '@/app/components/common/MobileBackButton';
import withLayout from '@/app/hoc/withLayout';
import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import Form from './components/Form';

function Page() {
	return (
		<div className="flex flex-col items-center w-screen h-screen">
			<section className={pageContainer}>
				<div className="flex gap-x-2.5 items-center">
					<MobileBackButton />
					<h1 className="text-xl font-bold text-center">글 작성하기</h1>
				</div>
				<Form />
			</section>
		</div>
	);
}

export default withLayout(Page, false, false);
// style
const pageContainer = clsx(
	blockStyle,
	'rounded-none lg:rounded-30',
	'w-screen lg:w-auto',
	'shadow-none lg:shadow-main',
	'flex flex-col gap-y-5',
	'lg:mt-[72px]'
);

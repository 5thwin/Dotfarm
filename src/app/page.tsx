import WeekSupport from './main/components/weekSupport/WeekSupport';
import MainSideArea from './main/components/MainSideArea';
import CommunitySection from './main/components/commutiny/CommunitySection';
import withLayout from './hoc/withLayout';
import PcBanner from './main/components/banner/PcBanner';
import clsx from 'clsx';
import MobileBanner from './main/components/banner/MobileBanner';
import WatchListBox from './main/components/banner/WatchListBox';
import { Metadata } from 'next';
import GoToWriteButton from './components/button/GoToWriteButton';
import EditorPick from './main/components/picks/EditorPick';
import NearDeadline from './main/components/nearDeadline/NearDeadline';

export const metadata: Metadata = {
	title: {
		absolute: '닷팜',
	},
};

function Page() {
	return (
		<div className="pt-20 lg:pt-28 pb-14 lg:pb-20 lg:px-5 xl:px-[72px] mx-auto">
			<div className="hidden lg:flex gap-x-30px">
				<PcBanner />
			</div>
			<div className="lg:hidden inline-block pb-4">
				<MobileBanner />
			</div>
			<main className="max-w-[1218px] flex flex-col gap-y-5 lg:gap-y-30px mx-auto lg:mt-5">
				<EditorPick />
				<WeekSupport />
				<NearDeadline />
			</main>
		</div>
	);
}
export default withLayout(Page, true, true, true);

import WeekSupport from './main/components/weekSupport/WeekSupport';
import withLayout from './hoc/withLayout';
import PcBanner from './main/components/banner/PcBanner';
import MobileBanner from './main/components/banner/MobileBanner';
import { Metadata } from 'next';
import EditorPick from './main/components/picks/EditorPick';
import NearDeadline from './main/components/nearDeadline/NearDeadline';
import ServiceEndPopup from './main/components/service-end/ServiceEndPopup';

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
			<ServiceEndPopup />
		</div>
	);
}
export default withLayout(Page, true, true, true);

import WeekSupport from './components/weekSupport/WeekSupport';
import MainSideArea from './components/MainSideArea';
import OpenChatBanner from './components/OpenChatBanner';
import CommunitySection from './components/commutiny/CommunitySection';
import withLayout from '../hoc/withLayout';
import PcBanner from './components/banner/PcBanner';
import clsx from 'clsx';
import { Mobile } from '../components/responsive/ResponsiveUI';
import MainHeaderMobile from '../components/common/header/MainHeader-mobile';
function Page() {
	return (
		<div className="p-15px lg:p-0">
			<div className="lg:inline-block hidden">
				<PcBanner />
			</div>
			<main>
				<div className={responsiveMainPage}>
					<Mobile>
						<MainHeaderMobile />
					</Mobile>
					<MainSideArea />
					<section
						id="main-section"
						className="flex flex-col gap-y-5 lg:gap-y-30px flex-1"
					>
						<WeekSupport />
						<OpenChatBanner />
						<CommunitySection />
					</section>
				</div>
			</main>
		</div>
	);
}
export default withLayout(Page, true);
// style
const responsiveMainPage = clsx(
	'mx-auto lg:mt-[65px] flex gap-x-30px',
	'lg:px-5 xl:px-[72px]',
	'lg:flex-row lg:items-start flex-col gap-y-5 '
);

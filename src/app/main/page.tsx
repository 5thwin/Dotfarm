import WeekSupport from './components/weekSupport/WeekSupport';
import MainSideArea from './components/MainSideArea';
import OpenChatBanner from './components/OpenChatBanner';
import CommunitySection from './components/commutiny/CommunitySection';
import withLayout from '../hoc/withLayout';
import PcBanner from './components/banner/PcBanner';
import clsx from 'clsx';
import MobileBanner from './components/banner/MobileBanner';
type Params = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};
function Page({ searchParams }: Params) {
	const category =
		typeof searchParams.category === 'string'
			? searchParams.category
			: undefined;
	return (
		<div className="p-15px lg:p-0 pt-20 pb-14 lg:pb-20">
			<div className="lg:inline-block hidden">
				<PcBanner />
			</div>
			<div className="lg:hidden inline-block pb-4">
				<MobileBanner />
			</div>
			<main>
				<div className={responsiveMainPage}>
					<MainSideArea />
					<section
						id="main-section"
						className="flex flex-col gap-y-5 lg:gap-y-30px flex-1"
					>
						<WeekSupport />
						<OpenChatBanner />
						<CommunitySection category={category} />
					</section>
				</div>
			</main>
		</div>
	);
}
export default withLayout(Page, true, true, true);
// style
const responsiveMainPage = clsx(
	'mx-auto lg:mt-[65px] flex gap-x-30px',
	'lg:px-5 xl:px-[72px]',
	'lg:flex-row lg:items-start flex-col gap-y-5 '
);

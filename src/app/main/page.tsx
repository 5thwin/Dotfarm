import WeekSupport from './components/weekSupport/WeekSupport';
import MainSideArea from './components/MainSideArea';
import OpenChatBanner from './components/OpenChatBanner';
import CommunitySection from './components/commutiny/CommunitySection';
import withLayout from '../hoc/withLayout';
import RecentUsedMachinery from './components/commutiny/RecentUsedMachinery';
import QnATab from './components/commutiny/qna/QnATab';
import PcBanner from './components/banner/PcBanner';
import clsx from 'clsx';
import { Desktop } from '../components/responsive/ResponsiveUI';
function Page() {
	return (
		<div className="p-15px lg:p-0">
			<Desktop>
				<PcBanner />
			</Desktop>
			<main>
				<div className={responsiveMainPage}>
					<MainSideArea />
					<section
						id="main-section"
						className="flex flex-col gap-y-30px flex-1"
					>
						<WeekSupport />
						<OpenChatBanner />
						<CommunitySection
							tab1Component={
								<>
									{/* @ts-expect-error Server Component */}
									<RecentUsedMachinery />
								</>
							}
							tab2Component={
								<>
									{/* @ts-expect-error Server Component */}
									<QnATab />
								</>
							}
						/>
					</section>
				</div>
			</main>
		</div>
	);
}
export default withLayout(Page, true);
// style
const responsiveMainPage = clsx(
	'mx-auto mt-[65px] flex gap-x-30px',
	'lg:px-5 xl:px-[72px]',
	'lg:flex-row lg:items-start flex-col '
);

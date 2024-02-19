import WeekSupport from './components/WeekSupport';
import MainSideArea from './components/MainSideArea';
import OpenChatBanner from './components/OpenChatBanner';
import CommunitySection from './components/commutiny/CommunitySection';
import withHeader from '../hoc/withHeader';
import RecentUsedMachinery from './components/commutiny/RecentUsedMachinery';

function Page() {
	return (
		<div>
			<section
				id="main-thumb"
				className="w-screen h-[450px] bg-[#ECFFF0]"
			></section>
			<main>
				<div className="mx-auto mt-[65px] flex gap-x-30px md:px-[72px]">
					<MainSideArea />
					<section
						id="main-section"
						className="flex flex-col gap-y-30px flex-1"
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
export default withHeader(Page, true);

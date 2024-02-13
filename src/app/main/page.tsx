import WeekSupport from './components/WeekSupport';
import MainSideArea from './components/MainSideArea';
import OpenChatBanner from './components/OpenChatBanner';

export default function Page() {
	return (
		<div>
			<section
				id="main-thumb"
				className="w-screen h-[450px] bg-[#ECFFF0]"
			></section>
			<main>
				<div className="container mx-auto mt-[65px] flex gap-x-30px">
					<MainSideArea />
					<section
						id="main-section"
						className="flex flex-col gap-y-30px flex-1"
					>
						<WeekSupport />
						<OpenChatBanner />
					</section>
				</div>
			</main>
		</div>
	);
}

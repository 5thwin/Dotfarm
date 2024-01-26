import CardSection from './components/CardSection';
import FeatureSection from './components/FeatureSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LastSection from './components/LastSection';
import ProblemSection from './components/ProblemSection';
import UserNeedsSection from './components/UserNeedsSection';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Header />
			<HeroSection />
			<ProblemSection />
			<UserNeedsSection />
			<FeatureSection />
			<CardSection />
			<LastSection />
		</main>
	);
}

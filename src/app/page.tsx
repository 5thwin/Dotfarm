import CardSection from './components/landing/CardSection';
import Header from './components/landing/Header';
import HeroSection from './components/landing/HeroSection';
import ProblemSection from './components/landing/ProblemSection';
import UserNeedsSection from './components/landing/UserNeedsSection';
import FeatureSection from './components/landing/FeatureSection';
import LastSection from './components/landing/LastSection';

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

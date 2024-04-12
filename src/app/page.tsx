import CardSection from './components/landing/CardSection';
import Header from './components/landing/Header';
import HeroSection from './components/landing/HeroSection';
import ProblemSection from './components/landing/ProblemSection';
import UserNeedsSection from './components/landing/UserNeedsSection';
import FeatureSection from './components/landing/FeatureSection';
import LastSection from './components/landing/LastSection';
import { Metadata } from 'next';
import { CLIENT_ID, REDIRECT_URI } from '@/utils/kakao';

export const metadata: Metadata = {
	title: '농업 정보 플랫폼 닷팜',
	description:
		'한 곳에서 모든 농업 관련 지원 사업 및 정보를 쉽게 찾아보세요. 농부에게 필요한 최신 농업 정보와 지원 사업을 알려드립니다.',

	openGraph: {
		title: '농업 정보 플랫폼 닷팜',
		description:
			'한 곳에서 모든 농업 관련 지원 사업 및 정보를 쉽게 찾아보세요. 농부에게 필요한 최신 농업 정보와 지원 사업을 알려드립니다.',
	},
	icons: {
		icon: '/favicon.ico',
	},
	verification: {
		other: {
			'naver-site-verification': `${process.env.NEXT_PUBLIC_NAVER_VERIFICATION}`,
		},
	},
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<p>
				{CLIENT_ID} {REDIRECT_URI}
			</p>
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

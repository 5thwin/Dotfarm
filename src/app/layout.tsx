import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "농업 정보 플랫폼 '닷팜'",
	description:
		'한 곳에서 모든 농업 관련 지원 사업 및 정보를 쉽게 찾아보세요. 농부에게 필요한 최신 농업 정보와 지원 사업을 알려드립니다.',

	openGraph: {
		title: "농업 정보 플랫폼 '닷팜'",
		description:
			'한 곳에서 모든 농업 관련 지원 사업 및 정보를 쉽게 찾아보세요. 농부에게 필요한 최신 농업 정보와 지원 사업을 알려드립니다.',
	},
	icons: {
		icon: '/favicon.svg',
	},
	verification: {
		other: {
			'naver-site-verification': `${process.env.NEXT_PUBLIC_NAVER_VERIFICATION}`,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}

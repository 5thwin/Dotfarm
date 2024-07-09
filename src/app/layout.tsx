import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: '농업 정보 플랫폼 닷팜',
		template: '닷팜 - %s',
	},
	description:
		'한 곳에서 모든 농업 관련 지원 사업 및 정보를 쉽게 찾아보세요. 농부에게 필요한 최신 농업 정보와 지원 사업을 알려드립니다.',
	keywords: '',
	openGraph: {
		title: '농업 정보 플랫폼 닷팜',
		description:
			'한 곳에서 모든 농업 관련 지원 사업 및 정보를 쉽게 찾아보세요. 농부에게 필요한 최신 농업 정보와 지원 사업을 알려드립니다.',
		images: [
			{
				url: 'https://www.dotfarm.kr/opengraph-image.jpg', // Must be an absolute URL
				width: 800,
				height: 400,
			},
			{
				url: 'https://www.dotfarm.kr/opengraph-image-1800x1600.jpg',
				width: 1800,
				height: 1600,
			},
		],
	},
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Analytics />
				<Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
				{children}
				<div id="modal-root" />
			</body>
		</html>
	);
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DotFarm',
  description: '한 곳에서 모든 농업 관련 지원 사업 및 정보를 쉽게 찾아보세요. 농부에게 필요한 최신 농업 정보와 지원 사업을 알려드리며, 농업 경영 및 생산성 향상에 필요한 자료를 제공합니다.',
  openGraph: {
    title: 'Blog',
    description: '한 곳에서 모든 농업 관련 지원 사업 및 정보를 쉽게 찾아보세요. 농부에게 필요한 최신 농업 정보와 지원 사업을 알려드리며, 농업 경영 및 생산성 향상에 필요한 자료를 제공합니다.',
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

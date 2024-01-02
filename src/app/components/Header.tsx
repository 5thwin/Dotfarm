import { LandingHeaderButtonStyle } from '@/app/styles/common/buttonStyle';
import clsx from 'clsx';
import Image from 'next/image';

export default function Header() {
  return <nav className={clsx('fixed top-0 left-0 right-0 p-5 z-30', 'flex items-center justify-between bg-white')}>
    <Image
      src="/dotfarm.svg"
      alt="Dotfarm Logo"
      width={100}
      height={24}
      priority
    />
    <button className={LandingHeaderButtonStyle}>
      <span>{'농업 정보 무료 보기 >'}</span>
    </button>
  </nav>
}


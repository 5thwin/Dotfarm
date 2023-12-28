import { LandingButtonStyle } from '@/app/styles/common/buttonStyle';
import clsx from 'clsx';
import Image from 'next/image';

export default function HeroSection() {
  return <section className='flex flex-col items-center py-24 w-full' style={{ background: 'linear-gradient(180deg, #C1FFCF 0%, rgba(255, 255, 255, 0.00) 100%)' }}>
    <Image
      src="/heroFarmer.svg"
      alt="Farmer who use the mobile phone"

      width={296}
      height={337}
      priority
    />
    <div className='flex flex-col gap-y-4 items-center'>
      <Image
        src="/dotfarm.svg"
        alt="Dotfarm Logo"

        width={111}
        height={36}
        priority
      />
      <div className='flex flex-col gap-y-[30px] items-center'>
        <div className='flex flex-col gap-y-4 items-center'>
          <div className='text-2xl text-center'>
            <p className='font-medium'>어렵고 찾기 힘든</p>
            <p className='font-bold'>농업 관련 지원 사업 및 정보</p>
            <p className='font-bold'>한 번에 볼 수 없을까?</p>
          </div>
          <p className='text-center text-details'>농부에게 필요한 농업정보,<br />
            지원사업 정보를 알려드립니다  </p>
        </div>
        <button className={LandingButtonStyle}>
          <span>{'농업 정보 무료 보기 >'}</span>
        </button>
      </div>
    </div>
  </section>
}

// style
const mainTitleContainer = clsx('text-2xl text-center', 'lg:text-left lg:')

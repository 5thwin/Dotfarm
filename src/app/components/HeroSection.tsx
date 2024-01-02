import { LandingButtonStyle } from '@/app/styles/common/buttonStyle';
import clsx from 'clsx';
import Image from 'next/image';
import DotfarmLogo from './DotfarmLogo';
import { useIsMobile } from '@/hooks/useIsMobile';
import { KakaoChatButton } from './KakaoChatButton';

export default function HeroSection() {
  return <section className='flexCenter flex-col py-24 w-full lg:min-h-screen ' style={{ background: 'linear-gradient(180deg, #C1FFCF 0%, rgba(255, 255, 255, 0.00) 100%)' }}>
    <div className='flex flex-col items-center lg:flex-row-reverse'>
      <div className={clsx('relative', imageContainer)}>
        <Image
          src="/heroFarmer.svg"
          alt="Farmer who use the mobile phone"
          sizes="(max-width: 1023px) 296px, 469px"
          fill
          priority
        />
      </div>
      <div className='flex flex-col gap-y-4 items-center lg:items-start'>
        <DotfarmLogo width={111} height={36} />
        <div className='flex flex-col gap-y-[30px] items-center lg:items-start'>
          <div className='flex flex-col gap-y-4 items-center lg:items-start'>
            <div className={mainTitleContainer}>
              <p className='font-medium'>어렵고 찾기 힘든</p>
              <p className='font-bold'>농업 관련 지원 사업 및 정보</p>
              <p className='font-bold'>한 번에 볼 수 없을까?</p>
            </div>
            <p className={subTextStyle}>농부에게 필요한 농업정보,<br />
              지원사업 정보를 알려드립니다  </p>
          </div>
          <KakaoChatButton className={LandingButtonStyle}>
            <span>{'농업 정보 무료 보기 >'}</span>
          </KakaoChatButton>
        </div>
      </div>
    </div>
  </section>
}

// style
const imageContainer = clsx('w-[296px] h-[337px]', 'lg:w-[469px] lg:h-[533px]')
const mainTitleContainer = clsx('text-2xl text-center', 'lg:text-left lg:text-[45px] lg:leading-normal')
const subTextStyle = clsx('text-center text-details', 'lg:text-left lg:text-[28px] lg:leading-normal')

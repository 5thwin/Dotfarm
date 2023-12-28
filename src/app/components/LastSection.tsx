import Image from 'next/image';
import { LandingButtonStyle } from '../styles/common/buttonStyle';

export default function LastSection() {
  return <section className='relative flex flex-col items-center pt-24 w-full gap-y-14' style={{ background: 'linear-gradient(0deg, #C1FFCF 0%, rgba(255, 255, 255, 0.00) 100%)' }}>
    <div className='flex flex-col items-center gap-y-9'>
      <div className='flex flex-col gap-y-[15px]'>
        <p className='text-2xl font-bold text-center'>지금 바로<br />
          농업 관련 정보를 매주<br />
          닷팜에서 받아보세요
        </p>
        <p className='text-[#6B6B6B] text-center'>
          지원사업과 각종 자료를 뉴스레터<br />
          형식으로 공유드리겠습니다
        </p>
      </div>
      <button className={LandingButtonStyle}>
        <span className='font-bold'>{'농업 정보 무료 보기 >'}</span>
      </button>
    </div>
    <div className='relative bottom-0'>
      <Image
        src='/landing/twoFarmer.svg'
        alt='농부 두 명의 아이콘'
        width='348'
        height='367'
      />
    </div>
  </section>
}

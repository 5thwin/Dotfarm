import RightQuoteMark from '@/assets/icons/RightQuoteMark';
import LeftQuoteMark from '@/assets/icons/LeftQuoteMark';
import Image from 'next/image';
import clsx from 'clsx';
import { responsiveInlineBlock } from '../styles/common/textStyle';
export default function ProblemSection() {
  return <section className='flex flex-col items-center gap-y-6 my-16'>
    <Image
      src="/surportOnSpoon.svg"
      alt="떠먹여주는 지원사업"

      width={206}
      height={131}
      priority
    />
    <div className='flex items-start gap-x-1'>
      <LeftQuoteMark />
      <p className={mainTextStyle}>
        <span className={responsiveInlineBlock}>많은 농부님들 지원사업은</span>{' '}
        <span className={responsiveInlineBlock}>잘 챙겨 드시는지요?</span>
      </p>
      <RightQuoteMark />
    </div>
    <p className={subTextStyle}>바쁜 농업 종사자들은 현장에서 챙겨보기 힘들어<br />
      각종 지원 사업을 놓치기 십상입니다</p>
  </section>
}

const mainTextStyle = clsx('font-semibold text-center text-2xl lg:text-3xl')
const subTextStyle = clsx('text-center text-details lg:text-2xl')

import { textUnderlineHighlight } from '@/app/styles/common/textStyle';
import clsx from 'clsx';
import Image from 'next/image';

export default function UserNeedsSection() {
  return <section className='flex flex-col gap-y-11 items-center my-16'>
    <div className='text-2xl text-center'>
      <p>여러 농부님들의</p>
      <p className='font-bold'>많은 의견을 반영하여</p>
      <p className={clsx(textUnderlineHighlight, 'font-bold')}>불편함을 해소하고자 합니다.</p>
    </div>
    <div className='flex items-center gap-y-[30px] flex-col'>
      <div className='flexCenter flex-col gap-y-5'>
        <Image
          src="/frownyWoman.svg"
          alt="A woman's face with an unhappy expression"
          width={94}
          height={94}
        />
        <div className={textBoxStyle}>
          <p className='text-sm font-bold text-textGreen'>
            예비 농업인
          </p>
          <p>귀농 준비중인데 어떻게 <br />
            알아봐야 될지 잘 모르겠어요ㅠ</p>
        </div>
      </div>

      <div className='flexCenter flex-col gap-y-5'>
        <Image
          src="/frownyMan.svg"
          alt="A man's face with an unhappy expression"
          width={94}
          height={94}
        />
        <div className={textBoxStyle}>
          <p className='text-sm font-bold text-textGreen'>
            농사 현직자
          </p>
          <p>바쁘게 농사 하다보니 지자체에서  <br />
            나오는 지원사업을 볼 시간이 없어요!</p>
        </div>
      </div>
    </div>
  </section>
}

const textBoxStyle = clsx('rounded-20 bg-white backdrop-blur-sm shadow-main',
  'flexCenter flex-col py-5 px-[30px] gap-y-1',
  'text-center font-bold'
)

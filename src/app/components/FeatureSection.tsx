import { responsiveInlineBlock, textUnderlineHighlight } from '@/app/styles/common/textStyle';
import clsx from 'clsx';
import Image from 'next/image';

export default function FeatureSection() {

  return <section className='flex flex-col gap-y-7.5 lg:gap-y-6 items-center my-16'>
    <div className='relative lg:right-[20%]'>
      <p className='text-center text-2xl font-medium lg:text-left lg:text-3xl'>
        닷팜에서<br />
        <b>못챙겼던 지원사업부터<br />
          <span className={textUnderlineHighlight}>모든 소식을 전해드립니다</span></b>
      </p>
    </div>
    <div className='flex flex-col gap-y-2.5 items-center self-stretch lg:w-[855px]'>
      <div className={clsx(shadowContainerStyle, 'relative')}>
        <FarmerViewingPhoneImgArea />
        <svg className='hidden lg:inline-block absolute right-[17.5%] -top-[3.5%]' xmlns="http://www.w3.org/2000/svg" width="27" height="15" viewBox="0 0 27 15" fill="none">
          <path d="M13.5016 0.632082C15.7409 0.385325 21.0985 0.611351 23.9264 0.75747C24.9582 0.810783 25.7785 1.64592 25.8215 2.67575L26.1512 10.5717L17.9379 14.1789C17.6612 14.3004 17.3598 14.3573 17.0565 14.3453L7.08228 13.9507L2.84885 13.6284C1.15574 13.4968 -0.695635 13.216 1.69963 10.1935C4.17833 7.06567 10.39 0.974962 13.5016 0.632082Z" fill="#FBC0AE" />
        </svg>
        {FeatureImage1}
        <div className={fetureTextWrapper}>
          <p className={featureTitleStyle}>
            <span className={responsiveInlineBlock}>기관별 홈페이지에서 매번</span>{' '}
            <span className={responsiveInlineBlock}>확인 어렵지 않나요?</span>
          </p>
          <p className={featureDetailStyle}>{featureText.detailText1}</p>
        </div>
      </div>
      <div className={shadowContainerStyle}>
        {FeatureImage2}
        <div className={fetureTextWrapper}>
          <p className={featureTitleStyle}>
            <span className={responsiveInlineBlock}>농업 관련 지원 사업</span>{' '}
            <span className={responsiveInlineBlock}>놓친 적 많지 않나요?</span>
          </p>
          <p className={featureDetailStyle}>{featureText.detailText2}</p>
        </div>
      </div>
      <div className={shadowContainerStyle}>
        {FeatureImage3}
        <div className={fetureTextWrapper}>
          <p className={featureTitleStyle}>
            <span className={responsiveInlineBlock}>농업 관련 이슈와 소식</span>{' '}
            <span className={responsiveInlineBlock}>접하기 힘들지 않았나요?</span>
          </p>
          <p className={featureDetailStyle}>{featureText.detailText2}</p>
        </div>
      </div>
    </div>
  </section >
}

const FarmerViewingPhoneImgArea = () => <div className='absolute right-[10%] -z-10 -top-[85%] hidden lg:inline-block'>
  <span className='absolute top-[18%] -left-[10%]  font-bold text-xl text-[#878787]'>좋구나!</span>
  <Image src='/landing/farmerWithPhone.svg' alt='A farmer views her phone' width={138.8} height={258} />
</div>

const FeatureImage1 = <Image
  src="/feature1.svg"
  alt="Hard-to-find support information"
  width={200}
  height={146}
/>
const FeatureImage2 = <Image
  src="/feature2.svg"
  alt="Information you may have missed"
  width={200}
  height={134}
/>
const FeatureImage3 = <Image
  src="/feature3.svg"
  alt="Hard-to-reach rural outreach information"
  width={200}
  height={123}
/>
const featureText = {
  detailText1: '지자체별 흩어져 있는 지원 사업은 찾기 힘들어 활용하지 못하는 경우가 많아 닷팜에서 여러분 농가에 해당되는 지원 사업을 찾아 알려드립니다',
  detailText2: '영농생활하면 바빠서 지원 사업과 소식에 어두울 수밖에 없기 때문에 닷팜에서 간편하게 농업 정보를 전달드리겠습니다',
  detailText3: '농부들을 위한 새로운 농업 정보와 지원 사업, 농업 관련 콘텐츠를 뉴스레터 형식으로 새로운 소식을 알려드리겠습니다'
}
// style
const shadowContainerStyle = clsx('w-[335px] lg:w-auto', 'py-7.5 px-5 lg:px-10', 'flexCenter flex-col lg:flex-row', 'gap-7.5', 'rounded-20  bg-white shadow-main')
const fetureTextWrapper = clsx('flex flex-col gap-y-2.5 lg:justify-center lg:items-start', 'break-keep')
const featureTitleStyle = clsx('text-lg font-bold text-center')
const featureDetailStyle = clsx('text-sm leading-6 text-subText', 'lg:text-left')

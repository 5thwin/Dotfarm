import { textUnderlineHighlight } from '@/app/styles/common/textStyle';
import clsx from 'clsx';
import Image from 'next/image';

export default function FeatureSection() {

  return <section className='flex flex-col gap-y-[30px] items-center my-16'>
    <div>
      <p className='text-center text-2xl font-medium'>
        닷팜에서<br />
        <b>못챙겼던 지원사업부터<br />
          <span className={textUnderlineHighlight}>모든 소식을 전해드립니다</span></b></p>
    </div>
    <div className='flex flex-col gap-y-2.5 items-center'>
      <div className={shadowContainerStyle}>
        {FeatureImage1}
        <div className='flex flex-col gap-y-2.5'>
          <p className={featureTitleStyle}>기관별 홈페이지에서 매번<br />
            확인 어렵지 않나요?</p>
          <p className={featureDetailStyle}>{featureText.detailText1}</p>
        </div>
      </div>
      <div className={shadowContainerStyle}>
        {FeatureImage2}
        <div className='flex flex-col gap-y-2.5'>
          <p className={featureTitleStyle}>농업 관련 지원 사업<br />놓친 적 많지 않나요?</p>
          <p className={featureDetailStyle}>{featureText.detailText2}</p>
        </div>
      </div>
      <div className={shadowContainerStyle}>
        {FeatureImage3}
        <div className='flex flex-col gap-y-2.5'>
          <p className={featureTitleStyle}>농업 관련 이슈와 소식<br />접하기 힘들지 않았나요?</p>
          <p className={featureDetailStyle}>{featureText.detailText2}</p>
        </div>
      </div>
    </div>
  </section>
}


const FeatureImage1 = <Image
  src="/feature1.svg"
  alt="Hard-to-find support information"
  width={210}
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
  width={199}
  height={123}
/>
const featureText = {
  detailText1: '지자체별 흩어져 있는 지원 사업은 찾기 힘들어 활용하지 못하는 경우가 많아 닷팜에서 여러분 농가에 해당되는 지원 사업을 찾아 알려드립니다',
  detailText2: '영농생활하면 바빠서 지원 사업과 소식에 어두울 수밖에 없기 때문에 닷팜에서 간편하게 농업 정보를 전달드리겠습니다',
  detailText3: '농부들을 위한 새로운 농업 정보와 지원 사업, 농업 관련 콘텐츠를 뉴스레터 형식으로 새로운 소식을 알려드리겠습니다'
}
// style
const shadowContainerStyle = clsx('w-[335px]', 'py-7.5 px-5 flexCenter flex-col gap-y-7.5', 'rounded-20  bg-white shadow-main')
const featureTitleStyle = clsx('text-lg font-bold text-center')
const featureDetailStyle = clsx('text-sm leading-6 text-subText')

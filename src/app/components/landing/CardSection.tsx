import {
	responsiveInlineBlock,
	textUnderlineHighlight,
} from '@/app/styles/common/textStyle';
import {
	DRIVE_NEWSLETTER_LINK,
	DRIVE_SUPPORT_LINK,
	DRIVE_VEDIO_LINK,
} from '@/constants/link';
import clsx from 'clsx';
import Image from 'next/image';

export default function CardSection() {
	return (
		<section className="flex flex-col gap-y-7.5 items-center py-24">
			<div className="flexCenter gap-y-2 flex-col text-center">
				<div className="font-bold text-2xl lg:text-3xl">
					<span className={responsiveInlineBlock}>영농생활 필수 정보를</span>{' '}
					<span className={responsiveInlineBlock}>
						쉽고 빠르게 볼 수 있습니다
					</span>
				</div>
				<p className="font-medium text-[#8E8E8E] lg:text-xl">
					농업 관련 지원사업, 뉴스, 영상레터 콘텐츠 제공
				</p>
			</div>
			<div className="flexCenter flex-col lg:flex-row gap-5">
				<div id="card_1" className={clsx(cardStyle, 'bg-[#DFF7FF]')}>
					<div className="relative">
						<Image
							src="/card1.png"
							alt="지원사업 리스트 제공"
							width={253}
							height={208}
						/>
						<div
							className={blurBoxStyle}
							style={{
								background:
									'linear-gradient(0deg, #DFF7FF 0%, rgba(223, 247, 255, 0.00) 100%)',
							}}
						></div>
					</div>
					<div className={cardTextContainerStyle}>
						<p className={cardTitleStyle}>{cardText.card1.title}</p>
						<p className={cardDescriptionStyle}>{cardText.card1.description}</p>
						<a
							href={DRIVE_SUPPORT_LINK}
							target="_blank"
							rel="noopener noreferrer"
							className={cardButtonStyle}
						>
							{cardText.card1.button}
						</a>
					</div>
				</div>
				<div id="card_2" className={clsx(cardStyle, 'bg-[#E9FFDC]')}>
					<div className="relative">
						<Image
							src="/card2.png"
							alt="뉴스레터 제공"
							width={253}
							height={208}
						/>
						<div
							className={blurBoxStyle}
							style={{
								background:
									'linear-gradient(0deg, #E9FFDC 0%, rgba(223, 247, 255, 0.00) 100%)',
							}}
						></div>
					</div>
					<div className={cardTextContainerStyle}>
						<p className={cardTitleStyle}>{cardText.card2.title}</p>
						<p className={cardDescriptionStyle}>{cardText.card2.description}</p>
						<a
							href={DRIVE_NEWSLETTER_LINK}
							target="_blank"
							rel="noopener noreferrer"
							className={cardButtonStyle}
						>
							{cardText.card2.button}
						</a>
					</div>
				</div>
				<div id="card_3" className={clsx(cardStyle, 'bg-[#FFEFDC]')}>
					<div className="relative">
						<Image
							src="/card3.png"
							alt="영상 레터 제공"
							width={253}
							height={208}
						/>
						<div
							className={blurBoxStyle}
							style={{
								background:
									'linear-gradient(0deg, #FFEFDC 0%, rgba(223, 247, 255, 0.00) 100%)',
							}}
						></div>
					</div>
					<div className={cardTextContainerStyle}>
						<p className={cardTitleStyle}>{cardText.card3.title}</p>
						<p className={cardDescriptionStyle}>{cardText.card3.description}</p>

						<a
							href={DRIVE_VEDIO_LINK}
							target="_blank"
							rel="noopener noreferrer"
							className={cardButtonStyle}
						>
							{cardText.card3.button}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

// text
const cardText = {
	card1: {
		title: '농업관련 지원사업',
		description:
			'각종 지역별 지자체와 농업 관련 기관들의 데이터를 수집한 지원 사업들을 제공합니다.',
		button: '지원사업 보기 >',
	},
	card2: {
		title: '뉴스레터',
		description:
			'기관에서 보여주기식 뉴스를 제외하고 최근 농업 관련 뉴스 근황 뉴스를 제공합니다',
		button: '뉴스레터 보기 >',
	},
	card3: {
		title: '영상레터',
		description:
			'영상 채널에서 유용한 정보를 모아 주마다 업로드하여 쉽고 빠르게 보실 수 있습니다',
		button: '영상레터 보기 >',
	},
};

// style
const cardStyle = clsx(
	'w-[307px] h-[432px] flexCenter flex-col gap-y-6',
	'rounded-40',
	'px-7 py-6'
);
const cardButtonStyle = clsx(
	'py-5 px-10 flexCenter',
	'rounded-full bg-white shadow-main',
	'font-bold'
);
const cardTextContainerStyle = clsx('flex flex-col gap-y-2.5');
const cardTitleStyle = clsx('text-lg font-bold');
const cardDescriptionStyle = clsx('text-sm text-[#2D2D2D] break-keep');
const blurBoxStyle = clsx('absolute bottom-0 w-full h-[58px]');

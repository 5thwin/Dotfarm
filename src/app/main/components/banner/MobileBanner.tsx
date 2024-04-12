import Image from 'next/image';

export default function MobileBanner() {
	return (
		<Image
			priority
			className="rounded-20 flexCenter text-center max-h-[280px]"
			src={'/main/mobileBanner.svg'}
			alt="농부에게 필요한 농업정보, 지원사업 정보를 알려드립니다."
			sizes="100vw"
			width={360}
			height={150}
			style={{
				width: '100vw',
				height: 'auto',
			}}
		/>
	);
}

/*
sizes="100vw"
			style={{
				width: '100%',
				height: 'auto',
			}}
			width={360}
			height={150}
       */

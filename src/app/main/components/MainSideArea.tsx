// import { KakaoBubble } from '@/app/components/icons/KakaoBubble';
// import { blockStyle } from '@/app/styles/common/blockStyle';
// import clsx from 'clsx';

// export default function MainSideArea() {
// 	return (
// 		<aside
// 			id="left-side-section"
// 			className="flex flex-col gap-y-30px w-[418px]"
// 		>
// 			<div
// 				id="main-login-block"
// 				className={clsx('flex flex-col gap-y-15px flex-1', blockStyle)}
// 			>
// 				<p className="text-lg font-bold">닷팜서비스를 이용해보세요.</p>
// 				<button className="p-5 rounded-30 flexCenter bg-[#F7E600] font-bold">
// 					<div className="flex gap-x-2.5 text-[#3A1D1D]">
// 						<KakaoBubble />
// 						<span>카카오톡 간편 로그인</span>
// 					</div>
// 				</button>
// 			</div>
// 			<div
// 				id="weekly-farming-issues"
// 				className={clsx('flex flex-col gap-y-15px', blockStyle)}
// 			>
// 				<div className="flex flex-col gap-5">
// 					<p className="text-lg font-bold">주간 영농 이슈</p>
// 					<div className="flexCenter rounded-20 border border-lineColor">
// 						<div className="flex-1 flexCenter rounded-20 px-5 py-2.5 bg-lineColor">
// 							<span className="font-bold">뉴스레터</span>
// 						</div>
// 						<div className="flex-1 flexCenter px-5 py-2.5">
// 							<span className="font-bold">영상레터</span>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="flex flex-col gap-y-5">
// 					{Array.from({ length: 6 }, (_, i) => i).map((i) => (
// 						<SampleLetter key={`letter_${i}`} />
// 					))}
// 				</div>
// 			</div>
// 		</aside>
// 	);
// }
// const SampleLetter = () => (
// 	<div className="flex gap-x-2.5">
// 		<div className={sampleLetterImgStyle}></div>
// 		<p>
// 			농촌진흥청, 날씨·병해충에 끄떡없는 ‘노지 스마트팜’ 시범 사업 추진 -
// 			조선비즈
// 		</p>
// 	</div>
// );

// // style
// const sampleLetterImgStyle = clsx('w-[130px] h-[72px] rounded-10 bg-[#D9D9D9]');

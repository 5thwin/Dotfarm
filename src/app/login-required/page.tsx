import clsx from 'clsx';
import Image from 'next/image';
import { KaKaoLoginButton } from '../components/landing/KaKaoLoginButton';
import { KakaoBubble } from '../components/icons/KakaoBubble';
import withLayout from '../hoc/withLayout';

function Page() {
	return (
		<section className="flexCenter w-screen h-screen flex-col gap-y-5">
			<div className="flex flex-col gap-y-15px items-center">
				<Image
					src={'/notFound/notFound.svg'}
					alt="Not Found"
					width={199}
					height={123}
				/>
				<h1 className="text-lg lg:text-[26px] text-mainGreen font-bold">
					닷팜 회원이 되어주세요.
				</h1>
				<p className="lg:text-base text-sm text-center font-bold">
					로그인이 필요한 페이지입니다.
				</p>
			</div>
			<KaKaoLoginButton className="bg-kakaoYellow rounded-xl text-black font-bold flexCenter py-3 px-6">
				<div className="flex gap-x-1">
					<KakaoBubble />
					<span className="text-opacity-85">카카오 로그인</span>
				</div>
			</KaKaoLoginButton>
		</section>
	);
}

export default withLayout(Page, true, false, true);
// style
const goToMainStyle = clsx(
	'flexCenter gap-x-5px text-white bg-mainGreen rounded-10 w-[250px] h-[50px] font-bold'
);

const IcReturn = () => (
	<svg
		width="16"
		height="10"
		viewBox="0 0 16 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M2.87 4.74985L4.84 6.71985C4.91369 6.78851 4.97279 6.87131 5.01378 6.96331C5.05477 7.05531 5.07681 7.15462 5.07859 7.25532C5.08037 7.35603 5.06184 7.45606 5.02412 7.54944C4.9864 7.64283 4.93026 7.72767 4.85904 7.79888C4.78782 7.8701 4.70299 7.92625 4.6096 7.96397C4.51621 8.00169 4.41618 8.02022 4.31548 8.01844C4.21477 8.01666 4.11546 7.99462 4.02346 7.95363C3.93146 7.91264 3.84866 7.85353 3.78 7.77985L0.53 4.52985L0 3.99985L0.53 3.46985L3.78 0.219847C3.92217 0.0873665 4.11022 0.0152433 4.30452 0.0186715C4.49882 0.0220998 4.68421 0.100812 4.82162 0.238225C4.95903 0.375638 5.03775 0.561023 5.04117 0.755324C5.0446 0.949625 4.97248 1.13767 4.84 1.27985L2.87 3.24985H12.75C13.612 3.24985 14.4386 3.59226 15.0481 4.20175C15.6576 4.81124 16 5.63789 16 6.49985C16 7.3618 15.6576 8.18845 15.0481 8.79794C14.4386 9.40744 13.612 9.74985 12.75 9.74985H10.75C10.5511 9.74985 10.3603 9.67083 10.2197 9.53018C10.079 9.38952 10 9.19876 10 8.99985C10 8.80093 10.079 8.61017 10.2197 8.46952C10.3603 8.32886 10.5511 8.24985 10.75 8.24985H12.75C13.2141 8.24985 13.6592 8.06547 13.9874 7.73728C14.3156 7.40909 14.5 6.96398 14.5 6.49985C14.5 6.03572 14.3156 5.5906 13.9874 5.26241C13.6592 4.93422 13.2141 4.74985 12.75 4.74985H2.87Z"
			fill="white"
		/>
	</svg>
);

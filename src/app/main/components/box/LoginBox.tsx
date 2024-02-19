import { KakaoBubble } from '@/app/components/icons/KakaoBubble';
import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';

export default function LoginBox() {
	return (
		<div
			id="main-login-block"
			className={clsx('flex flex-col gap-y-15px', blockStyle)}
		>
			<p className="text-lg font-bold">닷팜서비스를 이용해보세요.</p>
			<button className="p-5 rounded-30 flexCenter bg-[#F7E600] font-bold">
				<div className="flex gap-x-2.5 text-[#3A1D1D]">
					<KakaoBubble />
					<span>카카오톡 간편 로그인</span>
				</div>
			</button>
		</div>
	);
}

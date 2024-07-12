import Link from 'next/link';
import { SupportProgram } from '@/type/support';
import SupportCopyUrlButton from './SupportCopyUrlButton';
import SupportInterestButton from './SupportInterestButton';

type Props = {
	className?: string;
	support: SupportProgram;
	isLogined?: boolean;
};

export default function SupportPostBottom({
	className,
	support,
	isLogined = false,
}: Props) {
	return (
		<div className={className}>
			<div className="flex gap-x-5px px-2.5 py-3 lg:py-0 whitespace-nowrap">
				<SupportCopyUrlButton />
				{isLogined && <SupportInterestButton support={support} />}
				<Link
					target="_blank"
					href={support.link}
					className="rounded-10 bg-mainGreen px-[50px] py-[11px] flexCenter flex-1"
				>
					<p className="text-white font-bold text-sm">참여하기</p>
				</Link>
			</div>
		</div>
	);
}

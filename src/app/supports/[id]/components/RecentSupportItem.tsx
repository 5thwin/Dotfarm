import { SupportProgram } from '@/type/support';
import { getFullImagePath } from '@/utils/image';
import Link from 'next/link';
import SupportPostHead from './SupportPostHead';
import clsx from 'clsx';
import { truncateText } from '@/utils/string';
import Image from 'next/image';

type Props = {
	support: SupportProgram;
};

export default function RecentSupportItem({ support }: Props) {
	const { images } = support;
	const image = images && images.length > 0 ? images[0] : undefined;
	return (
		<Link
			href={`/supports/${support.id}`}
			className="flex gap-x-15px items-center py-2.5"
		>
			<div className="relative w-[110px] h-[110px] overflow-hidden rounded-10 flex-shrink-0">
				{image ? (
					<Image
						src={getFullImagePath(image.path)}
						alt={`${support.programName}}`}
						fill
						className="object-cover"
					/>
				) : (
					<div className="w-full h-full relative flex">
						<Image
							src="/support-thumbnail-background.svg"
							alt={support.programName}
							fill
							className="object-cover object-bottom"
						/>
						<div className="w-full h-full flexCenter">
							<p
								className={`font-extrabold text-center z-10 break-keep text-[#1E4A0A] text-[8px] line-clamp-4`}
							>
								{truncateText(support.programName)}
							</p>
						</div>
					</div>
				)}
			</div>
			<SupportPostHead
				support={support}
				titleClassName={clsx('font-bold line-clamp-2')}
			/>
		</Link>
	);
}

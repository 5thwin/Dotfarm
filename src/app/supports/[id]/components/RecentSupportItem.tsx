import { SupportProgram } from '@/type/support';
import { getFullImagePath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';
import SupportPostHead from './SupportPostHead';
import clsx from 'clsx';

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
					<div className="w-full h-full flexCenter bg-mainGreen py-2 px-4">
						<div className="bg-white h-full w-full flexCenter overflow-hidden">
							<p className="font-extrabold text-[10px] text-center break-keep">
								{support.programName}
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

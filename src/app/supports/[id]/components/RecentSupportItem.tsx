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
	const image = images[0] ? images[0] : undefined;
	return (
		<Link
			href={`/supports/${support.id}`}
			className="flex gap-x-15px items-center py-2.5"
		>
			<div className="relative w-[110px] h-[110px] overflow-hidden rounded-10">
				{image ? (
					<Image
						src={getFullImagePath(image.path)}
						alt={`${support.programName}}`}
						fill
						className="object-cover"
					/>
				) : (
					<div className="w-full h-full flexCenter bg-mainGreen">
						<p className="font-bold text-lg text-subGreen text-center whitespace-nowrap">
							{support.programName}
						</p>
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

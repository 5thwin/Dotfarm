import { SupportProgram } from '@/type/support';
import { getFullImagePath } from '@/utils/image';
import { truncateText } from '@/utils/string';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
type Props = {
	support: SupportProgram;
};
export default function PickItem({ support }: Props) {
	const { images, programName, deadline } = support;
	const image =
		images.length > 0 ? images.find((image) => image.order === 0) : null;
	const deadlineDate = format(new Date(deadline), 'yyyy-MM-dd');

	return (
		<Link
			className="flex flex-col gap-y-2.5 w-[148px]"
			href={`/supports/${support.id}`}
		>
			<div className="relative w-[148px] h-[212px] min-w-[148px] rounded-10 overflow-hidden">
				{image ? (
					<Image
						fill
						src={getFullImagePath(image.path)}
						alt={programName}
						className="object-cover"
					/>
				) : (
					<div className="w-full h-full flexCenter relative">
						<Image
							src="support-thumbnail-background.svg"
							alt="thumbnail"
							fill
							className="object-cover"
						/>
						<p
							className={`font-extrabold text-center z-10 break-keep text-[#1E4A0A] text-sm`}
						>
							{truncateText(programName)}
						</p>
					</div>
				)}
			</div>
			<div>
				<p className="font-bold text-sm line-clamp-3">{programName}</p>
				<span className="text-subText text-sm">~{deadlineDate}</span>
			</div>
		</Link>
	);
}

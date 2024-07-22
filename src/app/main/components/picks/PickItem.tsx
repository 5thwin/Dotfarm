import { SupportProgram } from '@/type/support';
import { getFullImagePath } from '@/utils/image';
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
					<div className="w-full h-full bg-mainGreen  flexCenter">
						<p className="text-white font-bold text-center">{programName}</p>
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

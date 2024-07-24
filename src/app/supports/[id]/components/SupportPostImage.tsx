import { SupportProgram } from '@/type/support';
import { getFullImagePath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';
import SupportPostImageSlider from './SupportPostImageSlider';

type Props = {
	support: SupportProgram;
};
export default function SupportPostImage({ support }: Props) {
	const { images } = support;
	if (!images || images.length === 0) return null;

	if (images.length > 1)
		return (
			<SupportPostImageSlider
				images={images.sort((a, b) => a.order - b.order)}
				alt={support.programName}
			/>
		);

	const image = images.find((image) => image.order === 0) || images[0];
	return (
		<Link href={getFullImagePath(image.path)} target="_blank">
			<div className="rounded-10  max-w-[560px] mx-auto relative border border-lineColor overflow-hidden">
				<Image
					src={getFullImagePath(image.path)}
					width={330}
					height={187}
					alt={support.programName}
					className="object-contain object-top w-full h-full"
				/>
			</div>
		</Link>
	);
}

//h-[50vw] max-h-[450px] min-h-[187px] min-w-[360px]

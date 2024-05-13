import CustomImage from '@/app/components/common/CustomImage';
import { News } from '@/type/issue';
import { getFullImagePath } from '@/utils/image';
import clsx from 'clsx';
import Link from 'next/link';

type Props = { letters: News[] };
export default function VedioLetterList({ letters }: Props) {
	return (
		<ul className="grid grid-cols-2 gap-5 max-h-[540px] overflow-scroll w-1/2">
			{letters &&
				letters.map((letter) => (
					<VidioLetterBox key={`letter_${letter.id}`} letter={letter} />
				))}
		</ul>
	);
}
const VidioLetterBox = ({ letter }: { letter: News }) => (
	<li>
		<Link href={letter.link} target="_blank">
			<div className="flex flex-col gap-y-5px md:gap-y-2.5 ">
				<div className="min-w-[100px] h-[54px] md:min-w-[155px] md:h-[86px] relative rounded-10 overflow-hidden shadow-main">
					<CustomImage
						className="object-cover"
						fill
						src={getFullImagePath(letter.imgURL)}
						alt="Picture of letter"
						errorImagePath="/error/letter-error.jpg"
					/>
				</div>
				<p className="line-clamp-2 text-sm">{letter.title}</p>
			</div>
		</Link>
	</li>
);

// style
const imgStyle = clsx('rounded-10 shadow-main');

import CustomImage from '@/app/components/common/CustomImage';
import { News } from '@/type/issue';
import { getFullImagePath } from '@/utils/image';
import clsx from 'clsx';
import Link from 'next/link';

type Props = { letters: News[] };
export default function NewsLetterList({ letters }: Props) {
	return (
		<ul className="flex flex-col  gap-y-5 flex-1 max-h-[540px] overflow-scroll">
			{letters &&
				letters.map((letter) => (
					<LetterBox key={`letter_${letter.id}`} letter={letter} />
				))}
		</ul>
	);
}
const LetterBox = ({ letter }: { letter: News }) => (
	<li>
		<Link href={letter.link} target="_blank">
			<div className="flex gap-x-2.5 items-center">
				<div className="min-w-[100px] h-[54px] md:min-w-[130px] md:h-[72px] relative rounded-10 overflow-hidden shadow-main">
					<CustomImage
						className="object-cover"
						fill
						src={getFullImagePath(letter.imgURL)}
						alt="Picture of letter"
						errorImagePath="/error/letter-error.jpg"
					/>
				</div>
				<p className="line-clamp-2 md:line-clamp-3">
					{letter.title} - {letter.publisher}
				</p>
			</div>
		</Link>
	</li>
);

// style
const imgStyle = clsx('rounded-10 shadow-main');

import customFetch from '@/api/customFetch';
import { NewsLetter } from '@/type/issue';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
	try {
		const res = await customFetch<NewsLetter[]>('/newsletter', {
			next: { revalidate: 10 },
		});
		return res;
	} catch (e) {}
}

export default async function NewsLetterList() {
	const newsLetters = await getData();
	return (
		<ul className="flex flex-col gap-y-5">
			{newsLetters &&
				newsLetters.map((letter) => (
					<LetterBox key={`letter_${letter.id}`} letter={letter} />
				))}
		</ul>
	);
}
const LetterBox = ({ letter }: { letter: NewsLetter }) => (
	<li>
		<Link href={letter.link} target="_blank">
			<div className="flex gap-x-2.5">
				<Image
					className={sampleLetterImgStyle}
					src={letter.imgURL}
					width={130}
					height={72}
					alt="Picture of letter"
				/>
				<p>
					{letter.title} - {letter.news}
				</p>
			</div>
		</Link>
	</li>
);

// style
const sampleLetterImgStyle = clsx('w-[130px] h-[72px] rounded-10 shadow-main');

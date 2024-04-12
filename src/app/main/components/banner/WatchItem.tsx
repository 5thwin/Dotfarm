import Link from 'next/link';
type Props = {
	title: string;
	link: string;
	category: string;
};
export default function WatchItem({ title, link, category }: Props) {
	return (
		<div className="flex gap-x-5px">
			<span className="w-20 text-sm text-subText"># {category}</span>
			<Link href={link} className="font-bold text-sm hover:underline text-left">
				{title}
			</Link>
		</div>
	);
}

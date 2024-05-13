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
			<Link
				href={link}
				className="flex-1 font-bold text-sm hover:underline text-left line-clamp-1"
			>
				{title}
			</Link>
		</div>
	);
}

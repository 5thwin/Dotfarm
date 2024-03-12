import Link from 'next/link';

export default function WatchItem() {
	return (
		<div className="flex gap-x-5px">
			<span className="w-20 text-sm text-subText"># 지원사업</span>
			<Link href={'example.com'} className="font-bold text-sm hover:underline">
				[경남] 2024년 농어촌진흥기금 융자계획 공고
			</Link>
		</div>
	);
}

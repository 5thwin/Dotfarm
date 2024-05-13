import { getNewsLatest } from '@/api/news/get';
import NewsLetterList from './NewsLetterList';
import VedioLetterList from './VideoLetterList';

export default async function IssueListContents() {
	const res = await getNewsLatest(8);
	if (!res) return null;
	const { newsLetters, videoLetters } = res;
	return (
		<div className="flex items-start w-[200%]">
			<NewsLetterList letters={newsLetters} />
			<VedioLetterList letters={videoLetters} />
		</div>
	);
}

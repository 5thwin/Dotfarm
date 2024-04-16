import { getNewsLatest } from '@/api/news/get';
import LetterList from './LetterList';

export default async function IssueListContents() {
	const res = await getNewsLatest(5);
	if (!res) return null;
	const { newsLetters, videoLetters } = res;
	return (
		<div className="flex items-start w-[200%]">
			<LetterList letters={newsLetters} />
			<LetterList letters={videoLetters} />
		</div>
	);
}

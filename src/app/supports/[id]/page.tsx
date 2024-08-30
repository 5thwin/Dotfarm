import { Metadata } from 'next';
import RecentSupports from './components/RecentSupports';
import SupportPost from './components/SupportPost';
import { getSupportbyId } from '@/api/support/get';
import { extractDescription, extractKeywords } from '@/utils/string/keyword';

type Params = {
	id: string;
};

type Props = {
	params: Params;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const support = await getSupportbyId(Number(params.id));

	const keywords = extractKeywords(
		support?.programName || '',
		support?.content || '',
		10,
		[support?.category || '지원사업']
	);

	const description = extractDescription(support?.content || '');

	return {
		title: support?.programName,
		description: description,
		keywords: keywords.join(', '),
	};
}

export default function Page({ params }: Props) {
	const id = Number(params.id);
	return (
		<div className="flex flex-col items-center">
			<div className="max-w-[768px] min-w-[390px] flex flex-col gap-y-15px w-full mb-24">
				<SupportPost id={id} />
				<RecentSupports />
			</div>
		</div>
	);
}

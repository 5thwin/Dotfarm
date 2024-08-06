import { getSearchSupport } from '@/api/support/get';
import RecentSupportItem from './RecentSupportItem';

export default async function RecentSupports() {
	const res = await getSearchSupport({ take: 4 });
	if (!res) return null;
	const { data } = res;
	return (
		<section className="rounded-20 flex flex-col p-15px shadow-main bg-white divide-y">
			{data.map((support) => (
				<RecentSupportItem key={support.id} support={support} />
			))}
		</section>
	);
}

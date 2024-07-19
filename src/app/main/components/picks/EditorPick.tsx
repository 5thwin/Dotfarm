'use server';

import { getPicks } from '@/api/pick/get';
import PickItem from './PickItem';

export default async function EditorPick() {
	const res = await getPicks({ page: 1, take: 10 });
	if (!res) return null;
	const { data: picks } = res;
	return (
		<div className="flex flex-col gap-y-15px">
			<h2 className="text-lg lg:text-2xl font-bold px-15px">
				에디터 PICK 지원사업
			</h2>
			<div className="px-15px flex flex-nowrap gap-x-2.5 overflow-x-scroll">
				{picks.map((pick, index) => (
					<PickItem key={`pick_item_${index}`} support={pick.support} />
				))}
			</div>
		</div>
	);
}

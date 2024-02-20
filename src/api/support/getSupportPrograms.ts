import { PaginatedSupportPrograms } from '@/type/support';
import customFetch from '../customFetch';

export async function getSupportPrograms() {
	try {
		const res = await customFetch<PaginatedSupportPrograms>(
			'/supportPrograms',
			{
				next: { revalidate: 10 },
			}
		);
		return res;
	} catch (e) {}
}

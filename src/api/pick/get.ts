'use server';
import { Pick } from '@/type/support';
import { PaginatePayload, PaginateResponse } from '..';
import customFetch from '../customFetch';

export async function getPicks({ page = 1, take = 4 }) {
	const params = new URLSearchParams();
	const payload: PaginatePayload = {
		page,
		take,
		order__createdAt: 'DESC',
	};
	Object.entries(payload).forEach(([key, value]) => {
		if (value) params.append(key, value.toString());
	});
	const queryString = params.toString();
	try {
		const res = await customFetch<PaginateResponse & { data: Pick[] }>(
			`/picks?${queryString}`,
			{
				method: 'GET',
				next: { revalidate: 10, tags: ['picks'] },
			}
		);
		return res;
	} catch (e) {
		return null;
	}
}

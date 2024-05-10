'use server';

import { PaginateResponse } from '@/api';
import customFetch from '@/api/customFetch';
import { getUserIdByAccessToken } from '@/api/auth/token/utils';
import { Interest } from '@/type/interest';

type payload = {
	// orderCreatedAt?: 'ASC' | 'DESC';
	page?: number;
	take?: number;
};
export async function getMyInterests(payload?: payload) {
	const params = new URLSearchParams();
	if (payload) {
		const { page, take } = payload;
		if (take) params.append('take', take.toString());
		if (page) params.append('page', page.toString());
	}
	const queryString = params.toString(); // 유효한 값들로만 구성된 queryString
	const userId = getUserIdByAccessToken();
	if (!userId) return null;
	try {
		const res = await customFetch<PaginateResponse & { data: Interest[] }>(
			`/users/${userId}/interest?${queryString}`,
			{
				method: 'GET',
				next: { revalidate: 10, tags: [`interest`] },
			}
		);
		return res;
	} catch (error) {
		return null;
	}
}

export async function getInterestCheck(supportId: number) {
	const userId = getUserIdByAccessToken();
	if (!userId) return { isInterest: false };
	const res = await customFetch<{ isInterest: boolean }>(
		`/users/${userId}/interest/${supportId}/check`,
		{
			method: 'GET',
			next: { revalidate: 10, tags: [`interest${supportId}`] },
		}
	);
	return res;
}

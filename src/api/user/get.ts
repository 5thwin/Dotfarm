'use server';

import { UserPartial } from '@/type/user';
import customFetch from '../customFetch';
import { getUserIdByAccessToken } from '../auth/token/utils';

export async function getUserById(id: number) {
	const res = await customFetch<UserPartial>(`/users/${id}`, {
		next: { revalidate: 10, tags: [`user${id}`] },
	});
	return res;
}

export async function getUserMe() {
	const myId = getUserIdByAccessToken();
	if (!myId) return undefined;
	try {
		const res = await customFetch<UserPartial>(`/users/${myId}`, {
			next: { revalidate: 10, tags: [`user${myId}`] },
		});
		console.log(res);
		return res;
	} catch (error) {
		return undefined;
	}
}

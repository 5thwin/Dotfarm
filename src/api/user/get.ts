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
		return res;
	} catch (error) {
		return undefined;
	}
}

//회원정보 중복 확인 api
// export async function checkUserNameAvailability(nickname: string) {
// 	const res = await customFetch<UserMe[]>(`/profiles?nickname=${nickname}`);
// 	if (res.length === 0) {
// 		return {
// 			isDuplicate: false,
// 			message: '사용 가능한 사용자 이름입니다.',
// 		};
// 	} else {
// 		return {
// 			isDuplicate: true,
// 			message: '이미 사용 중인 사용자 이름입니다.',
// 		};
// 	}
// }

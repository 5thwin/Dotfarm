'use server';

import { UserMe, UserPartial } from '@/type/user';
import customFetch from '../customFetch';

export async function getUserById(id: number) {
	const res = await customFetch<UserPartial>(`/users/${id}`, {
		next: { revalidate: 10, tags: [`user${id}`] },
	});
	return res;
}

//회원정보 중복 확인 api
export async function checkUserNameAvailability(nickname: string) {
	const res = await customFetch<UserMe[]>(`/profiles?nickname=${nickname}`);
	if (res.length === 0) {
		return {
			isDuplicate: false,
			message: '사용 가능한 사용자 이름입니다.',
		};
	} else {
		return {
			isDuplicate: true,
			message: '이미 사용 중인 사용자 이름입니다.',
		};
	}
}

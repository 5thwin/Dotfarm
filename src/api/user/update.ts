// 회원정보 수정 api
'use server';
import { revalidateTag } from 'next/cache';
import customFetch from '../customFetch';
import { User, UserPartial } from '@/type/user';
import { getUserIdByAccessToken } from '../auth/token/utils';

// interface
export type UserUpdateData = Partial<
	Pick<
		User,
		| 'profileImageURL'
		| 'nickname'
		| 'region'
		| 'subRegion'
		| 'farmingExperience'
		| 'majorCrops'
		| 'status'
	>
>;

export async function updateUserMe(updateData: UserUpdateData) {
	const userId = getUserIdByAccessToken();
	if (!userId) return;
	revalidateTag(`user${userId}`);
	const res = await customFetch<UserPartial>(`/users/${userId}`, {
		method: 'PATCH',
		body: JSON.stringify(updateData),
	});

	return res;
}

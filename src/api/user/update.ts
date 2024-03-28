// 회원정보 수정 api
'use server';
import { revalidateTag } from 'next/cache';
import customFetch from '../customFetch';
import { UserPartial } from '@/type/user';

// interface
export interface UserUpdateData {
	profileImageURL?: string | null;
	nickname?: string;
	region?: string | null;
	subRegion?: string | null;
	farmingExperience?: string | null;
	majorCrops?: string | null;
}

export async function updateUserMe(updateData: UserUpdateData, id: number) {
	revalidateTag(`user${id}`);
	const res = await customFetch<UserPartial>(`/profiles/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(updateData),
	});

	return res;
}

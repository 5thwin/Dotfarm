// 회원정보 수정 api
'use server';
import { revalidateTag } from 'next/cache';
import customFetch from '../customFetch';
import { User, UserPartial } from '@/type/user';
import { getUserIdByAccessToken } from '../auth/token/utils';
import safeJsonParse from '@/utils/safeJsonParse';
import { ErrorResponse } from '@/utils/error/httpError';

// interface
export type UserUpdateData = Partial<
	Pick<
		User,
		| 'nickname'
		| 'region'
		| 'subRegion'
		| 'farmingExperience'
		| 'majorCrops'
		| 'status'
	>
> & { image?: string };

export async function updateUserMe(updateData: UserUpdateData) {
	const userId = getUserIdByAccessToken();
	if (!userId) return;
	revalidateTag(`user${userId}`);
	try {
		const res = await customFetch<UserPartial>(`/users/${userId}`, {
			method: 'PATCH',
			body: JSON.stringify(updateData),
		});
		return res;
	} catch (error) {
		if (error instanceof Error) {
			const { data: errorObject } = safeJsonParse<ErrorResponse>(error.message);
			if (errorObject) {
				return errorObject;
			}
		}
	}
}

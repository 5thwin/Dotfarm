'use server';

import {
	getAccessTokenFromCookie,
	getUserIdByAccessToken,
} from '@/api/auth/token/utils';
import customFetch from '@/api/customFetch';
import HttpError, { ErrorResponse } from '@/utils/error/httpError';
import { revalidateTag } from 'next/cache';

type Payload = {
	supportId: number;
};
type Response = {
	author: {
		id: number;
	};
	support: {
		id: number;
	};
	id: number;
	updatedAt: string;
	createdAt: string;
};

export async function createMyInterest(payload: Payload) {
	const { supportId } = payload;
	const userId = getUserIdByAccessToken();
	if (!userId) {
		const unauthorizedError: ErrorResponse = {
			message: '로그인이 필요합니다.',
			statusCode: 401,
			error: 'Unauthorized',
		};
		throw new Error(JSON.stringify(unauthorizedError));
	}
	revalidateTag('interest');
	revalidateTag(`interest${supportId}`);

	const accessToken = getAccessTokenFromCookie();

	const res = await customFetch<Response>(
		`/users/${userId}/interest/${supportId}`,
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);
	return res;
}

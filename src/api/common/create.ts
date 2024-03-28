'use server';
import { cookies } from 'next/headers';
import customFetch from '../customFetch';

interface Response {
	fileName: string;
}

export async function saveTempImage(formData: FormData) {
	const accessToken = cookies().get('accessToken')?.value;
	// FormData의 key 확인
	try {
		const res = await customFetch<Response>(`/common/image`, {
			method: 'POST',
			body: formData,
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'multipart/form-data',
			},
		});
		return res;
	} catch (e) {
		console.error(e);
		throw e;
	}
}

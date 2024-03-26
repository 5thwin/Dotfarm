'use server';

import { fileToBase64 } from '@/utils/file';
import customFetch from '../customFetch';

interface Response {
	fileName: string;
}

export async function saveTempImage(imageBase64: string, accessToken: string) {
	const formData = new FormData();
	formData.append('image', imageBase64);
	try {
		const res = await customFetch<Response>('/common/image', {
			method: 'POST',
			body: formData,
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'multipart/form-data',
			},
		});
		return res;
	} catch (e) {
		throw e;
	}
}

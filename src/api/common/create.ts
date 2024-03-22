'use server';
import customFetch from '../customFetch';

interface Response {
	fileName: string;
}

export async function saveTempImage(image: File, accessToken: string) {
	const formData = new FormData();
	formData.append('image', image);
	try {
		const res = await customFetch<Response>('/common/image', {
			method: 'POST',
			body: formData,
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});

		return res;
	} catch (e) {
		throw e;
	}
}

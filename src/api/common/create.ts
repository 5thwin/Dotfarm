'use server';
import { cookies } from 'next/headers';
import customFetch from '../customFetch';

interface Response {
	fileName: string;
}

export async function saveTempImage(formData: FormData) {
	const accessToken = cookies().get('accessToken')?.value;
	// FormData의 key 확인
	for (let key of formData.keys()) {
		console.log(key);
	}

	// FormData의 value 확인
	for (let value of formData.values()) {
		console.log(value);
	}
	출처: //choisuhyeok.tistory.com/13 [작심삼일 개발이야기:티스토리]

	https: try {
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

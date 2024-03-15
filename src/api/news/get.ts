import { News } from '@/type/issue';
import customFetch from '../customFetch';

type Response = {
	newsLetters: News[];
	videoLetters: News[];
};
export async function getNewsLatest(count: number) {
	try {
		const res = await customFetch<Response>(`/news/latest?count=${count}`, {
			next: { revalidate: 10 },
		});

		return res;
	} catch (e) {}
}

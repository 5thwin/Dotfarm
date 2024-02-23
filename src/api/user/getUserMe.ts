import { UserMe } from '@/type/user';
import customFetch from '../customFetch';

export async function getUserMe() {
	try {
		const res = await customFetch<UserMe>('/me', { next: { revalidate: 10 } });
		return res;
	} catch (e) {}
}

import { UserMe } from '@/type/user';
import customFetch from '../customFetch';

export async function getUserMe() {
	try {
		const res = await customFetch<UserMe>('/profiles/1', {
			next: { revalidate: 10 },
		});
		return res;
	} catch (e) {}
}

// 회원정보 수정 api
export async function updateUserMe(updateData: UserUpdateData) {
	try {
		const res = await customFetch<UserMe>(`/profiles/1`, {
			method: 'PATCH',
			body: JSON.stringify(updateData),
		});
		return res;
	} catch (e) {}
}

// interface
interface UserUpdateData {
	profileImageURL?: string;
	userName?: string;
	region?: string;
	subRegion?: string;
	farmingExperience?: string;
	majorCrops?: string;
}

//회원정보 중복 확인 api
export async function checkUserNameAvailability(userName: string) {
	try {
		const res = await customFetch<UserMe[]>(`/profiles?userName=${userName}`);
		if (res.length === 0) {
			return {
				isDuplicate: false,
				message: '사용 가능한 사용자 이름입니다.',
			};
		} else {
			return {
				isDuplicate: true,
				message: '이미 사용 중인 사용자 이름입니다.',
			};
		}
	} catch (e) {}
}

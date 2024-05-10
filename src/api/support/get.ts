import { SupportProgram } from '@/type/support';
import customFetch from '../customFetch';
import { handleApiError } from '../handleApiError';
import { PaginateResponse } from '..';

export async function getSupportPrograms() {
	try {
		const res = await customFetch<SupportProgram[]>('/supports', {
			next: { revalidate: 10 },
		});
		return res;
	} catch (e) {
		console.error(e);
	}
}

export async function getSupportsInRange(
	rangeStartDate: string,
	rangeEndDate: string
) {
	try {
		// 쿼리 파라미터를 객체 형태로 만듭니다.
		const queryParams = new URLSearchParams({
			rangeStartDate: rangeStartDate,
			rangeEndDate: rangeEndDate,
		});

		// URL과 쿼리 파라미터를 조합하여 완전한 URL을 만듭니다.
		const url = `/supports/in-range?${queryParams.toString()}`;

		// 완전한 URL을 사용하여 HTTP 요청을 보냅니다.
		const res = await customFetch<SupportProgram[]>(url, {
			next: { revalidate: 10 },
		});

		return res;
	} catch (e) {
		// 오류 처리
		return undefined;
	}
}

type searchPayload = {
	programName?: string;
	content?: string;
	page?: number;
	take: number;
};
export async function getSearchSupport(payload: searchPayload) {
	const params = new URLSearchParams();
	const { programName, content, page = 1, take } = payload;
	params.append('order__createdAt', 'DESC');
	if (take) params.append('take', take.toString());
	if (page) params.append('page', page.toString());
	if (programName) params.append('where__programName__i_like', programName);
	else if (content) params.append('where__content__i_like', content);

	const url = `/supports/search?${params.toString()}`;
	try {
		const res = await customFetch<
			PaginateResponse & { data: SupportProgram[] }
		>(url, {
			method: 'GET',
			next: { revalidate: 10, tags: [`supports${params.toString()}`] },
		});
		return res;
	} catch (error) {
		return undefined;
	}
}

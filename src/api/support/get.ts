import { SupportProgram } from '@/type/support';
import customFetch from '../customFetch';
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
			next: {
				revalidate: 10,
				tags: [`supports${rangeStartDate}-${rangeEndDate}`],
			},
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
	rangeStartDate?: string;
	rangeEndDate?: string;
	startDate__gte?: string;
	startDate__lte?: string;
	deadline__gte?: string;
	deadline__lte?: string;
	order__startDate?: 'ASC' | 'DESC';
	order__deadline?: 'ASC' | 'DESC';
};
export async function getSearchSupport(payload: searchPayload) {
	const params = new URLSearchParams();
	const {
		programName,
		content,
		page = 1,
		take,
		rangeStartDate,
		rangeEndDate,
		startDate__gte,
		startDate__lte,
		deadline__gte,
		deadline__lte,
		order__startDate,
		order__deadline,
	} = payload;
	params.append('order__createdAt', 'DESC');
	if (take) params.append('take', take.toString());
	if (page) params.append('page', page.toString());
	if (programName) params.append('where__programName__i_like', programName);
	else if (content) params.append('where__content__i_like', content);

	if (rangeStartDate) params.append('rangeStartDate', rangeStartDate);
	if (rangeEndDate) params.append('rangeEndDate', rangeEndDate);
	if (startDate__gte) params.append('startDate__gte', startDate__gte);
	if (startDate__lte) params.append('startDate__lte', startDate__lte);
	if (deadline__gte) params.append('deadline__gte', deadline__gte);
	if (deadline__lte) params.append('deadline__lte', deadline__lte);

	if (order__startDate) params.append('order__startDate', order__startDate);
	if (order__deadline) params.append('order__deadline', order__deadline);

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

export async function getSupportbyId(id: number) {
	try {
		const res = await customFetch<SupportProgram>(`/supports/${id}`, {
			next: { revalidate: 10 },
		});
		return res;
	} catch (e) {
		return undefined;
	}
}

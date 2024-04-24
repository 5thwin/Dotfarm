import { SupportProgram } from '@/type/support';
import customFetch from '../customFetch';

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
	}
}

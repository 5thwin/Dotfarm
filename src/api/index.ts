export const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL;

export const COOKIE_KEY_ACCESS = 'accessToken';
export const COOKIE_KEY_REFRESH = 'refreshToken';

export type PaginateResponse = {
	cursor: { after: null };
	count: number;
	next: null;
	total?: number; // 요청 필드에 page가 들어가는 경우에 생기는 필드
};

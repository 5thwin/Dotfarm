/**
 * 한국 원화 형식으로 숫자를 포맷하는 함수.
 * @param price 숫자 형태의 가격.
 * @returns 포맷된 가격 문자열 ('ko-KR' 로케일 기준).
 */
export function formatPriceToKRW(price: number): string {
	return `${price.toLocaleString('ko-KR')}원`;
}

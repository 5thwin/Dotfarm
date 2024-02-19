/**
 * 숫자를 한국 원화 형식의 문자열로 변환하는 함수
 * @param price 가격을 나타내는 숫자
 * @returns 한국 원화 형식의 문자열
 */
export function formatPriceToKRW(price: number): string {
	return price.toLocaleString('ko-KR') + '원';
}

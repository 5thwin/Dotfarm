import { UserPartial } from '@/type/user';

export type KoreaRegions = {
	[region: string]: string[];
};

export function getUserRegionString(user: UserPartial): string {
	const { region, subRegion } = user;

	// 광역시에 해당하는 지역 리스트
	const metropolitanCities: Record<string, string> = {
		서울특별시: '서울',
		부산광역시: '부산',
		대구광역시: '대구',
		인천광역시: '인천',
		광주광역시: '광주',
		대전광역시: '대전',
		울산광역시: '울산',
	};

	if (!region) return '지역 정보 없음';

	// region이 광역시 목록에 있는 경우, 해당 광역시 이름으로 매핑하여 반환
	if (region in metropolitanCities) {
		return metropolitanCities[region];
	}

	// 그 외의 경우에는 subRegion의 이름을 사용
	return subRegion
		? subRegion.replace(/(시|군|구)$/, '')
		: '상세 지역 정보 없음';
}

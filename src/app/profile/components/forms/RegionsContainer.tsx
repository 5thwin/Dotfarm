import { KoreaRegions } from '@/utils/koreaRegions';
import { useEffect, useState } from 'react';
import ProfileRegion from './ProfileRegion';
import ProfileSubRegion from './ProfileSubRegion';

export default function RegionsContainer() {
	const [koreaRegions, setKoreaRegions] = useState<KoreaRegions>();
	useEffect(() => {
		// json 파일에서 지역 정보를 가져오는 비동기 함수
		const loadKoreaRegions = async () => {
			try {
				const response = await fetch('/json/KoreaRegions.json');
				if (!response.ok) {
					throw new Error('Failed to load');
				}
				const data = await response.json();
				setKoreaRegions(data);
			} catch (error) {
				console.error('Failed to load KoreaRegions.json', error);
			}
		};
		loadKoreaRegions();
	}, []);

	return (
		<div className="flex gap-x-5px">
			{koreaRegions && <ProfileRegion regions={koreaRegions} />}
			{koreaRegions && <ProfileSubRegion regions={koreaRegions} />}
		</div>
	);
}

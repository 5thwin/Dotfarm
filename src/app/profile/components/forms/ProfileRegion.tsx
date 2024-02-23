import { useEffect, useState } from 'react';
import { CustomSelect } from '../../../components/common/CustomSelect';
import useProfileStore from '../../store/profileStore';
import { KoreaRegions } from '@/utils/koreaRegions';
import { OptionType } from '@/utils/select';

export default function ProfileRegion({ regions }: { regions: KoreaRegions }) {
	const [regionOptions, setRegionOptions] = useState<OptionType[]>();

	const { region, setRegion, setSubRegion } = useProfileStore();

	// 첫번째 지역선택 options 만들기
	useEffect(() => {
		const provinceRegions = Object.keys(regions); //도, 특별시/ 광역시
		setRegionOptions(
			provinceRegions.map((provinceName) => ({
				label: provinceName,
				value: provinceName,
			}))
		);
	}, [regions]);
	return (
		<>
			<label htmlFor="sub-region" className="sr-only" />
			<CustomSelect
				id="sub-region"
				options={regionOptions || []}
				placeholder="지역선택"
				value={{ label: region, value: region }}
				onChange={(newRegion) => {
					setRegion(newRegion.value);
					setSubRegion('');
				}}
			/>
		</>
	);
}

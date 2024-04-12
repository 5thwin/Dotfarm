import { useEffect, useState } from 'react';
import { CustomSelect } from '../../../components/common/CustomSelect';
import useProfileStore from '../../store/profileStore';
import { KoreaRegions } from '@/utils/koreaRegions';
import { OptionType, signupFormSelectStyles } from '@/utils/select';
import Select from 'react-select';

export default function ProfileSubRegion({
	regions,
}: {
	regions: KoreaRegions;
}) {
	const [subRegionOptions, setSubRegionOptions] = useState<OptionType[]>();
	const { region, subRegion, setSubRegion } = useProfileStore();

	// 두번째 지역선택 options 만들기
	useEffect(() => {
		if (!region) return;
		const cityRegions = regions[region]; //시,군
		setSubRegionOptions(
			cityRegions.map((cityName) => ({
				label: cityName,
				value: cityName,
			}))
		);
	}, [region]);

	return (
		<>
			<label htmlFor="sub-region" className="sr-only" />
			<Select
				id="sub-region"
				styles={signupFormSelectStyles}
				isDisabled={region === ''}
				options={subRegionOptions || []}
				placeholder="구/시/군"
				value={{
					label: subRegion === '' ? '지역을 선택해주세요' : subRegion || '',
					value: subRegion || '',
				}}
				className="flex-1 text-sm"
				onChange={(newRegion) => {
					const newOption = newRegion as OptionType;
					setSubRegion(newOption.value);
				}}
			/>
		</>
	);
}

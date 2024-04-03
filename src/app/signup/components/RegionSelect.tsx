import { OptionType, signupFormSelectStyles } from '@/utils/select';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { KoreaRegions } from '@/utils/koreaRegions';
import useSignupFromStore from '../store/signupFromStore';

type Props = { koreaRegions: KoreaRegions };
export default function RegionSelect({ koreaRegions }: Props) {
	const { region, updateRegion, updateSubRegion, subRegion } =
		useSignupFromStore();
	const [provinceOptions, setProvinceOptions] = useState<OptionType[]>();
	const [cityOptions, setCityOptions] = useState<OptionType[]>();

	// 첫번째 지역선택 options 만들기
	useEffect(() => {
		if (!koreaRegions) return;
		const provinceRegions = Object.keys(koreaRegions); //도, 특별시/ 광역시
		setProvinceOptions(
			provinceRegions.map((provinceName) => ({
				label: provinceName,
				value: provinceName,
			}))
		);
	}, [koreaRegions]);
	// 두번째 지역선택 options 만들기
	useEffect(() => {
		if (!region || !koreaRegions) return;
		const cityRegions = koreaRegions[region]; //시,군
		setCityOptions(
			cityRegions.map((cityName) => ({
				label: cityName,
				value: cityName,
			}))
		);
	}, [region]);
	return (
		<div className="flex gap-x-2.5 w-full">
			<Select
				className="flex-1 text-sm"
				styles={signupFormSelectStyles}
				options={provinceOptions}
				value={region ? { label: region, value: region } : undefined}
				onChange={(newValue) => {
					const newOption = newValue as OptionType;
					updateRegion(newOption.value);
					updateSubRegion('');
				}}
				placeholder="지역선택"
			/>
			<Select
				isDisabled={region === ''}
				className="flex-1 text-sm"
				styles={signupFormSelectStyles}
				placeholder="구/시/군"
				options={cityOptions}
				value={subRegion ? { label: subRegion, value: subRegion } : undefined}
				onChange={(newValue) => {
					const newOption = newValue as OptionType;
					updateSubRegion(newOption.value);
				}}
			/>
		</div>
	);
}

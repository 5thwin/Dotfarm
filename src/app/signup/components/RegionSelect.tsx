import { OptionType, signupFormSelectStyles } from '@/utils/select';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import useSignupFromStore from '../store/signupFromStore';
import { KoreaRegions } from '@/utils/koreaRegions';

export default function RegionSelect() {
	const { region1, region2, updateRegion1, updateRegion2 } =
		useSignupFromStore();
	const [koreaRegions, setKoreaRegions] = useState<KoreaRegions>();
	const [provinceOptions, setProvinceOptions] = useState<OptionType[]>();
	const [cityOptions, setCityOptions] = useState<OptionType[]>();

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// json 파일에서 지역 정보를 가져오는 비동기 함수
		const loadKoreaRegions = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('/json/KoreaRegions.json');
				if (!response.ok) {
					throw new Error('Failed to load');
				}
				const data = await response.json();
				setKoreaRegions(data);
			} catch (error) {
				console.error('Failed to load KoreaRegions.json', error);
			} finally {
				setIsLoading(false);
			}
		};

		loadKoreaRegions();
	}, []);
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
		if (!region1 || !koreaRegions) return;
		const cityRegions = koreaRegions[region1]; //시,군
		setCityOptions(
			cityRegions.map((cityName) => ({
				label: cityName,
				value: cityName,
			}))
		);
	}, [region1]);

	return (
		<div className="flex gap-x-2.5 w-full">
			<Select
				className="flex-1 text-sm"
				styles={signupFormSelectStyles}
				options={provinceOptions}
				onChange={(newValue) => {
					const newOption = newValue as OptionType;
					updateRegion1(newOption.value);
					updateRegion2('');
				}}
				placeholder="지역선택"
			></Select>
			<Select
				isDisabled={region1 === ''}
				className="flex-1 text-sm"
				styles={signupFormSelectStyles}
				placeholder="구/시/군"
				options={cityOptions}
				onChange={(newValue) => {
					const newOption = newValue as OptionType;
					updateRegion2(newOption.value);
				}}
			></Select>
		</div>
	);
}
const options: OptionType[] = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

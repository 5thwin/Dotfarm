import CreatableSelect from 'react-select/creatable';
import useProfileStore from '../../store/profileStore';
import { useEffect, useState } from 'react';
import { OptionType, signupFormSelectStyles } from '@/utils/select';

export default function ProfileMajorCrops() {
	const { majorCrops, setMajorCrops } = useProfileStore();
	const [cropList, setCropList] = useState<OptionType[]>([]);
	useEffect(() => {
		// json 파일에서 지역 정보를 가져오는 비동기 함수
		const loadKoreaRegions = async () => {
			try {
				const response = await fetch('/json/crops.json');
				if (!response.ok) {
					throw new Error('Failed to load');
				}
				const data = await response.json();
				setCropList(
					data.crops.map((crop: string) => ({ label: crop, value: crop }))
				);
			} catch (error) {
				console.error('Failed to load KoreaRegions.json', error);
			}
		};
		loadKoreaRegions();
	}, []);
	return (
		<>
			<label htmlFor="major-crops" className="sr-only" />
			<CreatableSelect
				id="major-crops"
				options={cropList || []}
				placeholder="지역선택"
				value={{ value: majorCrops, label: majorCrops }}
				onChange={(majorCrops) => {
					majorCrops && setMajorCrops(majorCrops.value);
				}}
				styles={signupFormSelectStyles}
			/>
		</>
	);
}

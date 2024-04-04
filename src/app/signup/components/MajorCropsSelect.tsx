import { OptionType, signupFormSelectStyles } from '@/utils/select';
import Select, { DropdownIndicatorProps, components } from 'react-select';
import useSignupFromStore from '../store/signupFromStore';

export default function MajorCropsSelect() {
	const { majorCrops, updateMajorCrops } = useSignupFromStore();
	return (
		<Select
			defaultValue={
				majorCrops ? { label: majorCrops, value: majorCrops } : undefined
			}
			styles={signupFormSelectStyles}
			value={majorCrops ? { label: majorCrops, value: majorCrops } : undefined}
			placeholder="작물선택"
			options={options}
			onChange={(newValue) => {
				const newOptions = newValue as OptionType;
				updateMajorCrops(newOptions.value);
			}}
		/>
	);
}
const options: OptionType[] = [
	{ label: '없음', value: '없음' },
	{ label: '상추', value: '상추' },
	{ label: '토마토', value: '토마토' },
	{ label: '딸기', value: '딸기' },
	{ label: '감자', value: '감자' },
	{ label: '콩', value: '콩' },
];

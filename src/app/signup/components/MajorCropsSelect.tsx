import { OptionType, signupFormSelectStyles } from '@/utils/select';
import Select, { DropdownIndicatorProps, components } from 'react-select';
import useSignupFromStore from '../store/signupFromStore';

export default function MajorCropsSelect() {
	const { crop, updateCrop } = useSignupFromStore();
	return (
		<Select
			styles={signupFormSelectStyles}
			placeholder="작물선택"
			options={options}
			onChange={(newValue) => {
				const newOptions = newValue as OptionType;
				updateCrop(newOptions.value);
			}}
		/>
	);
}
const options: OptionType[] = [
	{ label: '없음', value: 'none' },
	{ label: '상추', value: 'lettuce' },
	{ label: '토마토', value: 'tomato' },
	{ label: '딸기', value: 'strawberries' },
	{ label: '감자', value: 'potatoes' },
];

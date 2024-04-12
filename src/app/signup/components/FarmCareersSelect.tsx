import { FarmExperience, experienceList } from '@/type/user';
import { OptionType, signupFormSelectStyles } from '@/utils/select';
import Select from 'react-select';
import useSignupFromStore from '../store/signupFromStore';

export default function FarmCareersSelect() {
	const { farmingExperience, updateFarmingExperience } = useSignupFromStore();

	return (
		<Select
			id="farm-careers"
			styles={signupFormSelectStyles}
			placeholder="경력선택"
			options={options}
			className="text-sm"
			value={
				farmingExperience
					? { label: farmingExperience, value: farmingExperience }
					: undefined
			}
			onChange={(newValue) => {
				const newOptions = newValue as OptionType;
				updateFarmingExperience(newOptions.value as FarmExperience);
			}}
		></Select>
	);
}

const options: OptionType[] = experienceList.map((item) => ({
	label: item,
	value: item,
}));

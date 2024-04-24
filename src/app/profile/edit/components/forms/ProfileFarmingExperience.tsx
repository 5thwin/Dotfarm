import useProfileStore from '../../store/profileStore';
import { useEffect, useState } from 'react';
import { OptionType, signupFormSelectStyles } from '@/utils/select';
import Select from 'react-select';
import { FarmExperience, experienceList } from '@/type/user';

export default function ProfileFarmingExperience() {
	const { farmingExperience, setFarmingExperience } = useProfileStore();

	return (
		<Select
			id="farm-careers"
			styles={signupFormSelectStyles}
			options={options}
			placeholder="경력선택"
			value={
				farmingExperience
					? { label: farmingExperience, value: farmingExperience }
					: undefined
			}
			onChange={(newValue) => {
				const newOptions = newValue as OptionType;
				setFarmingExperience(newOptions.value as FarmExperience);
			}}
		/>
	);
}

const options: OptionType[] = experienceList.map((item) => ({
	label: item,
	value: item,
}));

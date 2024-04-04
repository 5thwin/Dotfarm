import CreatableSelect from 'react-select/creatable';
import useProfileStore from '../../store/profileStore';
import { useEffect, useState } from 'react';
import { OptionType, signupFormSelectStyles } from '@/utils/select';

export default function ProfileFarmingExperience() {
	const { farmingExperience, setFarmingExperience } = useProfileStore();

	return (
		<>
			<label htmlFor="major-crops" className="sr-only" />
			<CreatableSelect
				id="major-crops"
				options={[]}
				placeholder="지역선택"
				value={{ label: farmingExperience, value: farmingExperience }}
				onChange={(newValue) => {
					newValue?.value && setFarmingExperience(newValue.value);
				}}
				styles={signupFormSelectStyles}
			/>
		</>
	);
}

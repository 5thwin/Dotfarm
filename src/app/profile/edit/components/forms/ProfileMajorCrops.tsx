import CreatableSelect from 'react-select/creatable';
import useProfileStore from '../../store/profileStore';
import { OptionType, signupFormSelectStyles } from '@/utils/select';

type Props = { crops: string[] };
export default function ProfileMajorCrops({ crops }: Props) {
	const { majorCrops, setMajorCrops } = useProfileStore();
	const options: OptionType[] = crops.map((crop) => ({
		label: crop,
		value: crop,
	}));

	return (
		<>
			<label htmlFor="major-crops" className="sr-only" />
			<CreatableSelect
				id="major-crops"
				styles={signupFormSelectStyles}
				options={options}
				placeholder="작물선택"
				value={
					majorCrops ? { value: majorCrops, label: majorCrops } : undefined
				}
				onChange={(newValue) => {
					const newOptions = newValue as OptionType;
					setMajorCrops(newOptions.value);
				}}
			/>
		</>
	);
}

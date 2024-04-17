import { OptionType, signupFormSelectStyles } from '@/utils/select';
import useSignupFromStore from '../store/signupFromStore';
import CreatableSelect from 'react-select/creatable';

type Props = { crops: string[] };
export default function MajorCropsSelect({ crops }: Props) {
	const { majorCrops, updateMajorCrops } = useSignupFromStore();
	const options: OptionType[] = crops.map((crop) => ({
		label: crop,
		value: crop,
	}));
	return (
		<CreatableSelect
			className="text-sm"
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

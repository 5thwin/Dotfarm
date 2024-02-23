import { signupFormSelectStyles } from '@/utils/select';
import Select from 'react-select';

export default function FarmCareersSelect() {
	return (
		<Select
			id="farm-careers"
			styles={signupFormSelectStyles}
			placeholder="경력선택"
		></Select>
	);
}

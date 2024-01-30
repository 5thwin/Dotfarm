import { signupFormSelectStyles } from '@/utils/select';
import Select from 'react-select';

export default function FarmCareersSelect() {
	return (
		<Select styles={signupFormSelectStyles} placeholder="경력선택"></Select>
	);
}

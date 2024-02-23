import React from 'react';
import Select from 'react-select';
import { OptionType, signupFormSelectStyles } from '@/utils/select';

interface SelectProps {
	options: OptionType[];
	placeholder: string;
	onChange: (newValue: OptionType) => void;
	isDisabled?: boolean;
	value?: OptionType;
	id?: string;
}

// Select 컴포넌트를 별도의 컴포넌트로 분리
export const CustomSelect: React.FC<SelectProps> = ({
	options,
	placeholder,
	onChange,
	isDisabled = false,
	value,
	id,
}) => (
	<Select
		id={id}
		value={value}
		isDisabled={isDisabled}
		className="flex-1 text-sm"
		styles={signupFormSelectStyles}
		options={options}
		onChange={(newValue) => onChange(newValue as OptionType)}
		placeholder={placeholder}
	/>
);

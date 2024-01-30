import { StylesConfig } from 'react-select';

export type OptionType = {
	label: string;
	value: string;
};

// react select style
export const signupFormSelectStyles: StylesConfig<OptionType, false> = {
	option: (provided, state) => ({
		...provided,
		opacity: 0.8,
	}),
	control: (provided) => ({
		...provided,
		width: '100%',
		borderColor: 'rgb(236 236 236)',
		borderRadius: 10,
		height: 45,
		padding: '0px 12px 0px 20px',
	}),
	singleValue: (provided, state) => ({
		...provided,
	}),
	valueContainer: (provided, state) => ({
		...provided,
		padding: 0,
	}),
	placeholder: (provided, state) => ({
		...provided,
		color: '#7D7B7B',
		fontSize: 14,
		fontWeight: 400,
	}),
	indicatorSeparator: (provided, state) => ({ ...provided, display: 'none' }),
};

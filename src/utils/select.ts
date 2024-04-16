import { colorMainGreen } from '@/constants/color';
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
		// backgroundColor: state.isFocused ? colorMainGreen : undefined,
	}),
	control: (provided, state) => ({
		...provided,
		width: '100%',
		borderColor: state.isFocused ? colorMainGreen : 'rgb(236 236 236)',
		outlineColor: state.isFocused ? colorMainGreen : undefined,
		boxShadow: state.isFocused ? `0 0 0 1px ${colorMainGreen}` : undefined,
		borderRadius: 10,
		height: 45,
		padding: '0px 12px 0px 15px',
		':hover': {
			boxShadow: `0 0 0 1px ${colorMainGreen}`,
			outlineColor: colorMainGreen,
			borderColor: colorMainGreen,
		},
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

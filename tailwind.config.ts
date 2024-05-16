import type { Config } from 'tailwindcss';

const config: Config = {
	important: true,
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				23: '23px',
			},
			borderRadius: {
				10: '10px',
				20: '20px',
				30: '30px',
				40: '40px',
				50: '50px',
			},
			colors: {
				mainText: '#282828',
				lightGreen: '#45F697',
				subGreen: '#EAFFEA',
				details: '#6B6B6B',
				mainGreen: '#42C67E',
				subText: '#7D7B7B',
				subGray: '#F1F3F8',
				neonGreen: '#45FF9B',
				lineColor: '#ECECEC',
				darkGreen: '#37b771',
				mainLine: '#DBDCDF',
				kakaoYellow: '#FEE500',
				warnRed: '#FF7676',
			},
			boxShadow: {
				main: '0px 0px 10px 0px rgba(0, 0, 0, 0.05)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			spacing: {
				7.5: '1.875rem',
				'5px': '5px',
				'15px': '15px',
				'25px': '25px',
				'30px': '30px',
			},
			keyframes: {
				modalOpen: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
			},
			animation: {
				modalOpen: 'modalOpen 200ms ease-in-out',
			},
		},
	},
	plugins: [],
};
export default config;

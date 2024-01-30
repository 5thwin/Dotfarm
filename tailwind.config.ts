import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
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
				details: '#6B6B6B',
				textGreen: '#42C67E',
				subText: '#7D7B7B',
				neonGreen: '#45FF9B',
				lineColor: '#ECECEC',
			},
			boxShadow: {
				main: '0px 0px 10px 0px rgba(0, 0, 0, 0.05)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			spacing: { 7.5: '1.875rem', '15px': '15px', '30px': '30px' },
		},
	},
	plugins: [],
};
export default config;

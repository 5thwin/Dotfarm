import localFont from 'next/font/local';

export const sebangGodic = localFont({
	src: [
		{ path: './fonts/SebangGothic.ttf', weight: 'normal' },
		{
			path: './fonts/SebangGothicBold.ttf',
			weight: 'bold',
		},
	],
	variable: '--sebang-godic',
	display: 'swap',
});

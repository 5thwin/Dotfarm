import clsx from 'clsx';

export const textUnderlineHighlight = clsx(
	'relative inline-block z-0',
	'after:transition-all',
	'after:absolute after:content-[""]',
	'after:w-full after:h-[20%] after:bg-neonGreen after:rounded-lg',
	'after:bottom-1 after:left-0 after:-z-[1] ',
	'after:hover:h-1/3'
);

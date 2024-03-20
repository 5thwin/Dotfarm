'use client';

import clsx from 'clsx';

export default function ReplyButton() {
	return <button className={buttonStyle}>답글달기</button>;
}

// style
const buttonStyle = clsx(
	'flexCenter px-2.5 py-5px rounded-[5px] text-subText font-bold text-sm'
);

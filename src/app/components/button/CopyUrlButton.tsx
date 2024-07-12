'use client';

import IcLink from '@/../public/icon/link.svg';
import clsx from 'clsx';
import { useCopyUrl } from '@/hooks/useCopyUrl';

export default function CopyUrlButton() {
	const { copyCurrentUrlToClipboard } = useCopyUrl();

	return (
		<button className={buttonStyle} onClick={copyCurrentUrlToClipboard}>
			<IcLink width="13" height="14" stroke="#7D7B7B" />
		</button>
	);
}
// style
const buttonStyle = clsx(
	'rounded-full bg-subGray flexCenter size-[37px]  hover:bg-gray-200'
);

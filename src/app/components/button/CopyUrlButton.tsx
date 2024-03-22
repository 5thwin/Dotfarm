'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Toast from '../common/Toast';
import IcLink from '@/../public/icon/link.svg';
import clsx from 'clsx';

export default function CopyUrlButton() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const origin =
		typeof window !== 'undefined' && window.location.origin
			? window.location.origin
			: '';

	const url = `${origin}${pathname}?${searchParams}`;

	const copyCurrentUrlToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(url);
			Toast.fire({
				title: 'URL이 클립보드에 복사되었습니다.',
				icon: 'success',
			});
		} catch (err) {
			Toast.fire({
				title: '클립보드 복사에 실패했습니다.',
				icon: 'error',
			});
		}
	};

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

import clsx from 'clsx';
import Link from 'next/link';

type Props = {
	text?: string;
	className?: string;
};
export default function TermButton({ text, className }: Props) {
	return (
		<Link href="/term" className={className || defaultButtonStyle}>
			{text || '이용약관'}
		</Link>
	);
}

// style
const defaultButtonStyle = clsx('text-sm text-subText');

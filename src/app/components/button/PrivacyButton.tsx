import clsx from 'clsx';
import Link from 'next/link';

type Props = {
	text?: string;
	className?: string;
};

export default function PrivacyButton({ text, className }: Props) {
	return (
		<Link href="/privacy" className={className || defaultButtonStyle}>
			{text || '개인정보 처리방침'}
		</Link>
	);
}
// style
const defaultButtonStyle = clsx('text-sm text-subText');

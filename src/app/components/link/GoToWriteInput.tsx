import clsx from 'clsx';
import Link from 'next/link';
import IcPaperPlane from '@/../public/icon/paperPlane.svg';
export default function GoToWriteInput() {
	return (
		<Link href={`/posts/create`} className={inputStyle}>
			<p className="flex-1">한마디 작성해주세요</p>
			<button className={buttonStyle}>
				<IcPaperPlane width="18" height="18" fill="white" />
			</button>
		</Link>
	);
}

const inputStyle = clsx(
	'flex items-center p-2.5 sm:px-5 sm:py-15px rounded-30 bg-subGray hover:bg-slate-200',
	'text-subText',
	'cursor-pointer'
);

const buttonStyle = clsx(
	'flexCenter size-9 rounded-full',
	'text-white bg-mainGreen '
);

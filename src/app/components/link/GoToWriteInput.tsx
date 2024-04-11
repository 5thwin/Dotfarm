import clsx from 'clsx';
import Link from 'next/link';

export default function GoToWriteInput() {
	return (
		<Link href={`/posts/create`} className={inputStyle}>
			<p className="flex-1">한마디 작성해주세요</p>
			<button className={buttonStyle}>입력하기</button>
		</Link>
	);
}

const inputStyle = clsx(
	'flex items-center px-5 py-15px rounded-30 bg-subGray hover:bg-slate-200',
	'text-subText',
	'cursor-pointer'
);

const buttonStyle = clsx(
	'flexCenter w-[72px] rounded-full',
	'text-white bg-mainGreen py-5px'
);

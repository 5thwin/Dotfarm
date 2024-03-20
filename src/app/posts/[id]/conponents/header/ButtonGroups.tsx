'use client';
import clsx from 'clsx';
import IcLike from '@/../public/icon/like.svg';
import IcLink from '@/../public/icon/link.svg';
export default function ButtonGroups() {
	return (
		<div className="flex gap-x-2.5">
			<button className={buttonStyle}>
				<IcLike width="15" height="13" stroke="#7D7B7B" />
			</button>
			<button className={buttonStyle}>
				<IcLink width="13" height="14" stroke="#7D7B7B" />
			</button>
		</div>
	);
}

// style
const buttonStyle = clsx('rounded-full bg-subGray flexCenter size-[37px]');

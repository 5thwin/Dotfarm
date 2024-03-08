import clsx from 'clsx';
import IcLike from '@/../public/icon/like.svg';
export default function ButtonGroups() {
	return (
		<div className="flex gap-x-2.5">
			<button className={buttonStyle}>
				<IcLike width="15" height="13" stroke="#7D7B7B" />
			</button>
			<button className={buttonStyle}></button>
		</div>
	);
}

// style
const buttonStyle = clsx('rounded-full bg-subGray flexCenter size-[37px]');

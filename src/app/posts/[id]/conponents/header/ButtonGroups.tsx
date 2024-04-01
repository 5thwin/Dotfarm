import clsx from 'clsx';
import IcLike from '@/../public/icon/like.svg';
import CopyUrlButton from '@/app/components/button/CopyUrlButton';
type Props = { post: Post };
export default function ButtonGroups() {
	return (
		<div className="flex gap-x-2.5">
			<button className={buttonStyle}>
				<IcLike width="15" height="13" stroke="#7D7B7B" />
			</button>
			<CopyUrlButton />
		</div>
	);
}

// style
const buttonStyle = clsx(
	'rounded-full bg-subGray flexCenter size-[37px] hover:bg-gray-200'
);

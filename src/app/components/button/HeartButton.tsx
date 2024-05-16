'use client';
import IcLike from '@/../public/icon/like.svg';
import clsx from 'clsx';
import LoadingSpinner from '../LoadingSpinner';

type Props = {
	likeCheck?: boolean;
	disabled?: boolean;
	handleClick?: () => void;
	isLoading?: boolean;
};

export default function HeartButton({
	likeCheck,
	disabled,
	handleClick,
	isLoading,
}: Props) {
	return (
		<button
			className={getButtonStyle(likeCheck || false)}
			onClick={() => handleClick && handleClick()}
			disabled={disabled}
		>
			{isLoading ? (
				<LoadingSpinner size={13} color="white" />
			) : (
				<IcLike
					width="15"
					height="13"
					stroke={likeCheck ? 'white' : '#7D7B7B'}
					fill={likeCheck ? 'white' : 'none'}
				/>
			)}
		</button>
	);
}

const getButtonStyle = (isInterested: boolean) =>
	clsx('rounded-full flexCenter min-w-[37px] size-[37px]', {
		'bg-mainGreen': isInterested,
		'bg-subGray': !isInterested,
	});

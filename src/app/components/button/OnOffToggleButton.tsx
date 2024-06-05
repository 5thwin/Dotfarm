import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

type Props = {
	defaultChecked?: boolean;
	onChange?: any;
	beforeChange?: any;
	onText?: string;
	offText?: string;
	width?: number;
	height?: number;
};

export default function OnOffToggleButton({
	defaultChecked = false,
	onChange,
	beforeChange,
	onText = '',
	offText = '',
	width = 60,
	height = 35,
}: Props) {
	const [checked, setChecked] = useState(defaultChecked);
	const handleClick = async (e: React.MouseEvent) => {
		e.stopPropagation();
		const newValue = !checked;
		if (beforeChange) {
			/**beforeChange의 반환값이 false이면 토글하지 않음 */
			const isSuccess = await beforeChange();
			if (!isSuccess) return;
		}
		setChecked(newValue);
		if (onChange) {
			onChange(newValue);
		}
	};

	useEffect(() => {
		setChecked(defaultChecked);
	}, [defaultChecked]);

	return (
		<button
			className={clsx('relative flex items-center px-1 rounded-full', {
				'bg-subGray': !checked,
				'bg-mainGreen': checked,
			})}
			onClick={handleClick}
			style={{
				width,
				height,
			}}
		>
			<div
				className={getToggleHandleStyle(checked)}
				style={{
					transform: checked ? `translateX(${width / 2}px)` : undefined,
				}}
			></div>
			<span className={getTextStyle(checked)}>
				{checked ? onText : offText}
			</span>
		</button>
	);
}

const getToggleHandleStyle = (isChecked: boolean) =>
	clsx('transition', 'w-6 h-6 rounded-full shadow-main', {
		'bg-white': isChecked,
		'bg-subText': !isChecked,
	});

const getTextStyle = (isChecked: boolean) =>
	clsx('absolute top-1/2 -translate-y-1/2 text-sm font-bold', {
		'text-white left-2': isChecked,
		'text-subText right-2': !isChecked,
	});

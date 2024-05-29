import clsx from 'clsx';

type MonthButtonsProps = {
	goToPrev: () => void;
	goToNext: () => void;
};
export default function MonthButtons({
	goToNext,
	goToPrev,
}: MonthButtonsProps) {
	return (
		<div className="flex gap-x-2.5">
			<button className={buttonStyle} onClick={() => goToPrev()}>
				<svg
					width="11"
					height="19"
					viewBox="0 0 11 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 18L1.76978 10.227C1.35194 9.83239 1.35194 9.16761 1.76978 8.77299L10 1"
						stroke="#7D7B7B"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			</button>
			<button className={buttonStyle} onClick={() => goToNext()}>
				<svg
					width="11"
					height="19"
					viewBox="0 0 11 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1L9.23022 8.77299C9.64806 9.16761 9.64806 9.83239 9.23022 10.227L1 18"
						stroke="#7D7B7B"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			</button>
		</div>
	);
}

// style
const buttonStyle = clsx(
	'flexCenter rounded-full border-subGray border',
	'px-5 py-2.5'
);

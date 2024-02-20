import { IconProps } from '.';

export function IcCalendar({
	width = 24,
	height = 25,
	color = 'white',
}: IconProps) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7 11.5H9V13.5H7V11.5ZM7 15.5H9V17.5H7V15.5ZM11 11.5H13V13.5H11V11.5ZM11 15.5H13V17.5H11V15.5ZM15 11.5H17V13.5H15V11.5ZM15 15.5H17V17.5H15V15.5Z"
				fill={color}
			/>
			<path
				d="M5 22.5H19C20.103 22.5 21 21.603 21 20.5V6.5C21 5.397 20.103 4.5 19 4.5H17V2.5H15V4.5H9V2.5H7V4.5H5C3.897 4.5 3 5.397 3 6.5V20.5C3 21.603 3.897 22.5 5 22.5ZM19 8.5L19.001 20.5H5V8.5H19Z"
				fill={color}
			/>
		</svg>
	);
}

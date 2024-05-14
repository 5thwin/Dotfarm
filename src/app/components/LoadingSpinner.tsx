import React from 'react';

interface LoadingSpinnerProps {
	size?: number; // 크기를 조절하기 위한 props
	color?: string; // 색상을 조절하기 위한 props
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
	size = 50,
	color = '#000',
}) => (
	<svg
		version="1.1"
		id="L9"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 100 100"
		xmlSpace="preserve"
		width={size}
		height={size}
	>
		<circle
			fill="none"
			stroke={color}
			strokeWidth="4"
			cx="50"
			cy="50"
			r="44"
			style={{ opacity: 0.5 }}
		/>
		<circle fill={color} stroke={color} strokeWidth="3" cx="8" cy="54" r="6">
			<animateTransform
				attributeName="transform"
				dur="2s"
				type="rotate"
				from="0 50 48"
				to="360 50 52"
				repeatCount="indefinite"
			/>
		</circle>
	</svg>
);

export default LoadingSpinner;

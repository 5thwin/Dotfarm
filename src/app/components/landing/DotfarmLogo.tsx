import Image from 'next/image';

export default function DotfarmLogo(props: {
	width?: number;
	height?: number;
}) {
	const { width = 111, height = 36 } = props;
	return (
		<Image
			src="/dotfarm.svg"
			alt="Dotfarm Logo"
			width={width}
			height={height}
			priority
		/>
	);
}

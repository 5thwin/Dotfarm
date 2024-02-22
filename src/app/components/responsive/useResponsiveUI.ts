import { useMediaQuery } from 'react-responsive';

export default function useResponsiveUI() {
	const isMobile = useMediaQuery({
		query: '(max-width:1023px)',
	});
	const isPc = useMediaQuery({
		query: '(min-width:1024px)',
	});
	const isTabletDown = useMediaQuery({
		query: '(max-width:767px)',
	});
	const isTabletUp = useMediaQuery({
		query: '(min-width:768px)',
	});
	return { isMobile, isPc, isTabletDown, isTabletUp };
}

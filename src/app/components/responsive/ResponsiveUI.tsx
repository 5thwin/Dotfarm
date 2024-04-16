'use client';
import { ReactNode, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }: { children?: ReactNode }) => {
	const [mobile, setMobile] = useState<boolean>(false);
	const isMobile = useMediaQuery({
		query: '(max-width:1023px)',
	});

	const checkResize = () => {
		if (isMobile) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};
	useEffect(() => {
		checkResize();
	}, [isMobile]);

	return <>{mobile && children}</>;
};

export const Desktop = ({ children }: { children?: ReactNode }) => {
	const [pc, setPc] = useState<boolean>(false);
	const isPc = useMediaQuery({
		query: '(min-width:1024px)',
	});
	const checkResize = () => {
		if (isPc) {
			setPc(true);
		} else {
			setPc(false);
		}
	};
	useEffect(() => {
		checkResize();
	}, [isPc]);
	return <>{pc && children}</>;
};

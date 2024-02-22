'use client';
import { ReactNode } from 'react';
import useResponsiveUI from './useResponsiveUI';

export const Mobile = ({ children }: { children: ReactNode }) => {
	const { isMobile } = useResponsiveUI();
	return <>{isMobile && children}</>;
};

export const Pc = ({ children }: { children: ReactNode }) => {
	const { isPc } = useResponsiveUI();
	return <>{isPc && children}</>;
};

export const TabletDown = ({ children }: { children: ReactNode }) => {
	const { isTabletDown } = useResponsiveUI();
	return <>{isTabletDown && children}</>;
};
export const TabletUp = ({ children }: { children: ReactNode }) => {
	const { isTabletUp } = useResponsiveUI();
	return <>{isTabletUp && children}</>;
};

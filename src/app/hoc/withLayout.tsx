import React, { ComponentType, ReactNode } from 'react';
import Header from '../components/common/header/Header';
import { Desktop } from '../components/responsive/ResponsiveUI';
import { getDisplayName } from '.';
// import Footer from '../components/common/Footer';

interface LayoutProps {
	children: ReactNode;
	showHeader?: boolean;
	showFooter?: boolean;
}

const Layout = ({
	children,
	showHeader = true,
	showFooter = true,
}: LayoutProps) => (
	<>
		{showHeader && (
			<Desktop>
				<Header />
			</Desktop>
		)}
		{children}
		{/* {showFooter && <Footer />} */}
	</>
);

interface WithLayoutProps {
	showHeader?: boolean;
	showFooter?: boolean;
}

const withLayout = <P extends object>(
	WrappedComponent: ComponentType<P>,
	showHeader: boolean = true,
	showFooter: boolean = true
): React.FC<P & WithLayoutProps> => {
	// 반환되는 컴포넌트
	const WithLayoutComponent: React.FC<P & WithLayoutProps> = (props: P) => (
		<Layout showHeader={showHeader} showFooter={showFooter}>
			<WrappedComponent {...props} />
		</Layout>
	);

	// Display name 설정
	WithLayoutComponent.displayName = `WithLayout(${getDisplayName(
		WrappedComponent
	)})`;

	return WithLayoutComponent;
};

export default withLayout;

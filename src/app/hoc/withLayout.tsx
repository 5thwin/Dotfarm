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

// Explicitly define the return type as React.FC for clarity
const withLayout = <P extends object>(
	WrappedComponent: ComponentType<P>,
	showHeader: boolean = true,
	showFooter: boolean = true
) => {
	// Define the component with explicit props type
	const WithLayoutComponent: React.FC<P> = (props: P) => (
		<Layout showHeader={showHeader} showFooter={showFooter}>
			<WrappedComponent {...props} />
		</Layout>
	);

	// Set display name for better debugging
	WithLayoutComponent.displayName = `WithLayout(${getDisplayName(
		WrappedComponent
	)})`;

	return WithLayoutComponent;
};

export default withLayout;

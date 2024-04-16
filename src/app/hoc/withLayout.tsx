import React, { ComponentType, ReactNode } from 'react';
import Header from '../components/common/header/Header';
import { getDisplayName } from '.';
import Footer from '../components/common/footer/Footer';

interface LayoutProps {
	children: ReactNode;
	showHeader?: boolean;
	showFooter?: boolean;
	mobileShowHeader?: boolean;
}

const Layout = ({
	children,
	showHeader = true,
	showFooter = false,
	mobileShowHeader = false,
}: LayoutProps) => (
	<>
		{showHeader && <Header showOnMobile={mobileShowHeader} />}
		<div>{children}</div>
		{showFooter && <Footer />}
	</>
);

// Explicitly define the return type as React.FC for clarity
const withLayout = <P extends object>(
	WrappedComponent: ComponentType<P>,
	showHeader: boolean = true,
	showFooter: boolean = false,
	mobileShowHeader: boolean = false
) => {
	// Define the component with explicit props type
	const WithLayoutComponent: React.FC<P> = (props: P) => (
		<Layout
			showHeader={showHeader}
			showFooter={showFooter}
			mobileShowHeader={mobileShowHeader}
		>
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

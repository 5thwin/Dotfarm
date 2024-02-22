import React, { ComponentType, ReactNode } from 'react';
import Header from '../components/common/header/Header';
import { Desktop } from '../components/responsive/ResponsiveUI';
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
	return (props: P) => (
		<Layout showHeader={showHeader} showFooter={showFooter}>
			<WrappedComponent {...props} />
		</Layout>
	);
};

export default withLayout;

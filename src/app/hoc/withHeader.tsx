import React, { ComponentType } from 'react';

import { ReactNode } from 'react';
import Header from '../components/common/Header';
// Layout.js
interface LayoutProps {
	children: ReactNode;
	showHeader: boolean;
}
const Layout = ({ children, showHeader }: LayoutProps) => (
	<>
		{/* // 조건부 렌더링을 통해 헤더 표시 */}
		{showHeader && <Header />}
		{children}
	</>
);

// Define a generic type for the props
interface WithHeaderProps {
	showHeader?: boolean;
}

// Use a generic function to infer the props of the wrapped component
const withHeader = <P extends object>(
	WrappedComponent: ComponentType<P>,
	showHeader: boolean = true
): React.FC<P & WithHeaderProps> => {
	return (props: P) => (
		<Layout showHeader={showHeader}>
			<WrappedComponent {...props} />
		</Layout>
	);
};

export default withHeader;

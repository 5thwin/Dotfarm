// withHeader.js (HOC)
import React from 'react';
import Layout from './Layout';

const withHeader = (WrappedComponent, showHeader = true) => {
	return (props) => (
		<Layout showHeader={showHeader}>
			<WrappedComponent {...props} />
		</Layout>
	);
};

export default withHeader;

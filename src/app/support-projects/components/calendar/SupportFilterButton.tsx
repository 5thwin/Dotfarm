'use client';
import React from 'react';
import useSupportFilterStore from '../../store/supportFilterStore';
import OnOffToggleButton from '@/app/components/button/OnOffToggleButton';

const SupportFilterButton: React.FC = () => {
	const { exceptClosedProjects, toggleExceptClosedProjects } =
		useSupportFilterStore();

	const handleToggle = () => {
		toggleExceptClosedProjects();
	};

	return (
		<OnOffToggleButton
			onText="켜기"
			offText="끄기"
			onChange={handleToggle}
			width={70}
			height={35}
			defaultChecked={exceptClosedProjects}
		/>
	);
};

export default SupportFilterButton;

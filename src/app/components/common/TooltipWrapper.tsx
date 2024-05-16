'use client';

import { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

type Props = {
	id: string;
	contents?: string;
	children?: ReactNode;
	className?: string;
	tooltipContents?: string;
};
export default function TooltipWrapper({
	id,
	contents,
	children,
	className,
	tooltipContents,
}: Props) {
	return (
		<div>
			<Tooltip id={id} />
			{children || (
				<p
					data-tooltip-id={id}
					data-tooltip-content={tooltipContents || contents}
					className={className}
				>
					{contents}
				</p>
			)}
		</div>
	);
}

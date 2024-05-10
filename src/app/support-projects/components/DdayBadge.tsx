import { calculateDday } from '@/utils/date/compare';

type Props = { deadline: string };

export default function DdayBadge({ deadline }: Props) {
	const dDay = calculateDday(deadline);
	const isClosed = dDay < 0;
	return (
		<span className="text-mainGreen font-bold text-sm whitespace-nowrap">
			{`D-${calculateDday(deadline)}`}
		</span>
	);
}

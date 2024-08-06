// 주차 지원사업
import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import WeekDaySupportPrograms from './WeekDaySupportPrograms';

export default function WeekSupport() {
	return (
		<div className={clsx(blockStyle, 'flex flex-col flex-1 ')}>
			<p className={responsiveTitle}>
				<span className={supportTextStyle}>이번 주 지원사업</span>
			</p>

			<WeekDaySupportPrograms />
		</div>
	);
}
// style
const responsiveTitle = clsx('flex flex-col');
const supportTextStyle = clsx('font-bold text-xl lg:text-2xl');

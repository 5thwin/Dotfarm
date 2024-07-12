import MobileBackButton from '@/app/components/common/MobileBackButton';
import { SupportProgram } from '@/type/support';
import { calculateDday } from '@/utils/date/compare';
import { getRecruitmentStatus } from '@/utils/supportPrograms';
import clsx from 'clsx';
import { format } from 'date-fns';

type Props = {
	support: SupportProgram;
	titleClassName?: string;
	backbutton?: boolean;
};

export default function SupportPostHead({
	support,
	titleClassName,
	backbutton = false,
}: Props) {
	const recruitmentStatus = getRecruitmentStatus(support);
	const recruitmentStatusString = (() => {
		if (recruitmentStatus === 'IS_ALWAYS') return '상시 모집';
		if (recruitmentStatus === 'IS_CLOSED') return '마감';
		return '모집중';
	})();
	const deadLineDate = new Date(support.deadline);

	return (
		<div className="flex flex-col gap-y-5px">
			<div className="flex items-center gap-x-5px">
				<div className="flex gap-x-5px flex-wrap gap-y-1">
					<span
						className={clsx(defaultSupportTag, {
							'bg-lineColor': recruitmentStatus === 'IS_ALWAYS',
							'bg-[#FECBBB]': recruitmentStatus === 'IS_CLOSED',
							'bg-subGreen': recruitmentStatus === 'IS_RECRUITING',
						})}
					>
						{recruitmentStatusString}
					</span>
					{/* <span className={clsx(defaultSupportTag)}>{program.category}</span> */}
					{recruitmentStatus === 'IS_RECRUITING' && (
						<span className={clsx(defaultSupportTag)}>
							D-{calculateDday(support.deadline)}
						</span>
					)}
					{recruitmentStatus !== 'IS_ALWAYS' && (
						<span className={clsx(defaultSupportTag)}>
							~{format(deadLineDate, 'yy.MM.dd')}
						</span>
					)}
				</div>
			</div>
			<div className={'flex items-center gap-x-5px'}>
				{backbutton && <MobileBackButton />}
				<h1 className={titleClassName ?? 'font-bold text-xl'}>
					{support.programName}
				</h1>
			</div>
		</div>
	);
}
// style
const defaultSupportTag = clsx(
	'rounded-10 px-[7px] py-5px',
	'text-sm font',
	'bg-subGray'
);

// 날짜 선택 시, 해당하는 지원사업 목록을 보여주는 영역
'use client';

import { blockStyle } from '@/app/styles/common/blockStyle';
import useSelectedDateStore from '../store/selectedDateStore';
import { filterProgramsByDate } from '@/utils/supportPrograms';
import { SupportProgram } from '@/type/support';
import SupportList from './SupportList';

type Props = {
	programs: SupportProgram[];
};

export default function DateProgramsWrapper({ programs }: Props) {
	const { selectedDate } = useSelectedDateStore();
	const targetDate = selectedDate ? selectedDate : new Date();
	const supportPrograms = filterProgramsByDate(programs, targetDate);
	return (
		<div className={blockStyle}>
			<div className="flex flex-col gap-y-25px">
				<div className="flex gap-x-2.5 items-center">
					<h3 className="text-lg font-bold">지원사업 & 교육 일정</h3>
					<span className="text-mainGreen font-bold">{programs.length}건</span>
				</div>
				<SupportList supportPrograms={supportPrograms} />
			</div>
		</div>
	);
}

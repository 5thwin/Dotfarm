import { create } from 'zustand';

type SelectedDateType = Date | undefined;

interface SelectedDate {
	selectedDate: SelectedDateType;
	setSelectedDate: (_: SelectedDateType) => void;
}
/**
 * 지원사업 모달을 띄워줄지 여부와, 사용자가 선택한 날짜를 저장하는 전역상태
 */
const useSelectedDateStore = create<SelectedDate>((set) => ({
	selectedDate: undefined,
	setSelectedDate: (newDate) => set(() => ({ selectedDate: newDate })),
}));

export default useSelectedDateStore;

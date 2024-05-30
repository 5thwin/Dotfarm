import { SupportProgram } from '@/type/support';
import { create } from 'zustand';

interface ModalSupports {
	supportPrograms?: SupportProgram[];
	setSupportPrograms: (_?: SupportProgram[]) => void;
}
/**
 * 지원사업 모달을 띄워줄지 여부와, 사용자가 선택한 날짜를 저장하는 전역상태
 */
const useModalSupportsStore = create<ModalSupports>((set) => ({
	supportPrograms: undefined,
	setSupportPrograms: (newSupportPrograms) =>
		set(() => ({ supportPrograms: newSupportPrograms })),
}));

export default useModalSupportsStore;

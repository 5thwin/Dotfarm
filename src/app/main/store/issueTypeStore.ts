import { IssueType } from '@/type/issue';
import { create } from 'zustand';

interface IssueTypeState {
	issueType: IssueType;
	setIssueType: (_: string) => void;
}
const useIssueTypeStore = create<IssueTypeState>((set) => ({
	issueType: '뉴스레터',
	setIssueType: (newType) => set(() => ({ issueType: newType })),
}));

export default useIssueTypeStore;

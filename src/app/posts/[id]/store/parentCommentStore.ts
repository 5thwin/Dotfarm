import { Comment } from '@/type/comment';
import { create } from 'zustand';

interface ParentCommentState {
	parentComment: Comment | undefined;
	setParentComment: (_?: Comment) => void;
}

const useParentCommentStore = create<ParentCommentState>((set) => ({
	parentComment: undefined,
	setParentComment: (parent) => set(() => ({ parentComment: parent })),
}));
export default useParentCommentStore;

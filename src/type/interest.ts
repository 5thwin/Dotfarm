import { PostPartial } from './post';
import { SupportProgram } from './support';
import { UserPartial } from './user';

export type Interest = {
	id: number;
	updatedAt: string;
	createdAt: string;
	author: UserPartial;
	support: SupportProgram;
};

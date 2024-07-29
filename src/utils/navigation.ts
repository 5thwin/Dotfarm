import { format } from 'date-fns';

export const PATH_MAIN = '/';

export const PATH_SUPPROT_PROJECTS = `/support-projects?year=${new Date().getFullYear()}&month=${
	new Date().getMonth() + 1
}&date=${format(new Date(), 'yyyy-MM-dd')}`;
export const PATH_POSTS = '/posts';
export const navLinks = [
	{ name: '홈', path: PATH_MAIN },
	{ name: '지원사업', path: PATH_SUPPROT_PROJECTS },
	// { name: '중고 농기계', path: `${PATH_POSTS}?category=중고` },
	// { name: '질문하기', path: `${PATH_POSTS}?category=질문하기` },
];

import fs from 'fs';
import path from 'path';
import { KoreaRegions } from '@/utils/koreaRegions';

// export const loadKoreaRegions = async () => {
// 	const response = await fetch('http://localhost:8080/json/KoreaRegions.json');
// 	if (!response.ok) {
// 		throw new Error('Failed to load');
// 	}
// 	const data = await response.json();
// 	return data as KoreaRegions;
// };

// Next.js 프로젝트의 루트 디렉토리에서 상대 경로를 사용
const filePath = path.join(
	process.cwd(),
	'public',
	'json',
	'KoreaRegions.json'
);

export const loadKoreaRegions = () => {
	const fileContents = fs.readFileSync(filePath, 'utf8');
	const data = JSON.parse(fileContents);
	return data as KoreaRegions;
};

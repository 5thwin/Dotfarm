import fs from 'fs';
import path from 'path';

// Next.js 프로젝트의 루트 디렉토리에서 상대 경로를 사용
const filePath = path.join(process.cwd(), 'public', 'json', 'crops.json');

export const loadCrops = () => {
	const fileContents = fs.readFileSync(filePath, 'utf8');
	const data = JSON.parse(fileContents);
	return data as { crops: string[] };
};

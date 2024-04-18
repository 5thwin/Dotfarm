// 상수로 이미지 베이스 URL 정의
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;

// imagePath가 상대경로인지 확인하고, 상대경로라면 IMAGE_BASE_URL을 붙여서 반환하는 함수
export function getFullImagePath(imagePath: string): string {
	// 이미지 경로가 http:// 또는 https://로 시작하는지 확인
	if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
		// 이미 절대 경로라면, 그대로 반환
		return imagePath;
	} else {
		// 상대 경로라면, IMAGE_BASE_URL을 앞에 붙임
		return `${IMAGE_BASE_URL}${imagePath}`;
	}
}

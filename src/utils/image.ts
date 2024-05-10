// 상수로 이미지 베이스 URL 정의
const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;

// imagePath가 상대경로인지 확인하고, 상대경로라면 IMAGE_BASE_URL을 붙여서 반환하는 함수
export function getFullImagePath(imagePath: string): string {
	if (imagePath.startsWith('blob')) {
		return imagePath;
	}
	// 이미지 경로가 http:// 또는 https://로 시작하는지 확인
	if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
		// 이미 절대 경로라면, 그대로 반환
		return imagePath;
	} else {
		// 상대 경로라면, IMAGE_BASE_URL을 앞에 붙임
		return `${IMAGE_BASE_URL}${imagePath}`;
	}
}

/**
 * Converts HEIC image files to JPEG format.
 * @param {File} file - The HEIC file to be converted.
 * @param {number} quality - The quality of the output JPEG image.
 * @returns {Promise<Blob>} A promise that resolves with the JPEG blob or rejects with an error.
 */
export async function convertHeicToJpeg(file: File, quality = 0.75) {
	if (typeof window === 'undefined') {
		return;
	}
	const heic2any = require('heic2any');

	try {
		const jpegBlob = await heic2any({
			blob: file,
			toType: 'image/jpeg',
			quality: quality,
		});
		return new File([jpegBlob], file.name.split('.')[0] + '.jpg', {
			type: 'image/jpeg',
			lastModified: new Date().getTime(),
		});
	} catch (error) {
		console.error('Failed to convert HEIC to JPEG:', error);
		throw new Error('이미지를 변환할 수 없습니다.');
	}
}

/**
 * Removes the extension from a file name.
 *
 * @param {string} filename - The full name of the file, including extension.
 * @returns {string} - The file name without the extension.
 */
export function removeExtension(filename: string) {
	// 마지막 '.'의 위치를 찾아 그 이전까지의 문자열을 반환
	const lastDotIndex = filename.lastIndexOf('.');
	if (lastDotIndex === -1) return filename; // '.'이 없는 경우, 확장자가 없으므로 그대로 반환
	return filename.substring(0, lastDotIndex);
}

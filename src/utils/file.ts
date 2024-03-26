// 파일을 Base64로 인코딩하는 함수
export const fileToBase64 = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result as string);
		};
		reader.onerror = (error) => reject(error);
		reader.readAsDataURL(file);
	});
};

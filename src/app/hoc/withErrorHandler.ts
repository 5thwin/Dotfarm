import { useRouter } from 'next/navigation';

// 에러 처리 유틸리티 함수
async function handleError(error: any) {
	const router = useRouter();

	// 에러 타입에 따른 처리
	if (error instanceof Error && error.message.includes('401')) {
		// 인증 에러 처리
		router.push('/401');
	} else if (error.response?.status === 404) {
		// 리소스를 찾을 수 없는 에러 처리
	} else {
		// 기타 에러 처리
	}
}

// 고차 함수
function withAsyncErrorHandler<T extends (...args: any[]) => Promise<any>>(
	asyncFn: T
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
	return async (...args: Parameters<T>) => {
		try {
			return await asyncFn(...args);
		} catch (error) {
			await handleError(error);
			// 필요에 따라 에러를 다시 던지거나, 특정 값을 반환할 수 있습니다.
			throw error;
		}
	};
}

// // 사용 예시
// async function fetchData(): Promise<any> {
// 	// 비동기 작업
// }

// const fetchDataWithHandling = withAsyncErrorHandler(fetchData);

// fetchDataWithHandling().catch((error) => {
// 	// 필요한 경우 여기에서 추가적인 에러 처리를 할 수 있습니다.
// });

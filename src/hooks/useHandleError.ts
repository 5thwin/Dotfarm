//이벤트 핸들러 혹은 비동기 요청에서 에러가 발생했을 경우
import { useRouter } from 'next/navigation';
import Toast from '@/app/components/common/Toast';
import { ErrorResponse, isErrorObject } from '@/utils/error/httpError';
import safeJsonParse from '@/utils/safeJsonParse';

interface ErrorHandlerProps {
	error: Error;
}
const useHandleError = () => {
	const router = useRouter();

	const handleError = ({ error }: ErrorHandlerProps) => {
		const { data: errorObject } = safeJsonParse<ErrorResponse>(error.message);
		console.log(errorObject);
		if (error.message.includes('401')) {
			router.push('/401');
			return;
		}
		if (isErrorObject(errorObject)) {
			Toast.fire({
				title: errorObject.message,
				icon: 'error',
			});
			return;
		}
		// 기본 에러 처리
		Toast.fire(
			'알 수 없는 오류가 발생했습니다.',
			'잠시 후 다시 시도해주세요.',
			'error'
		);
	};
	return { handleError };
};
export default useHandleError;

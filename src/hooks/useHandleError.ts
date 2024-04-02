//이벤트 핸들러 혹은 비동기 요청에서 에러가 발생했을 경우
import { useRouter } from 'next/navigation';
import Toast from '@/app/components/common/Toast';

interface ErrorHandlerProps {
	error: Error;
}
const useHandleError = () => {
	const router = useRouter();

	const handleError = ({ error }: ErrorHandlerProps) => {
		if (error.message.includes('401')) {
			router.push('/401');
			return;
		}

		// 다른 HTTP 상태 코드나 에러 유형에 대한 처리를 추가할 수 있습니다.
		// 예를 들어, 404 에러가 있을 경우 아래와 같이 처리할 수 있습니다.
		// if (error.message.includes('404')) {
		//   router.push('/404');
		//   return;
		// }

		// 기본 에러 처리
		Toast.fire('알 수 없는 오류가 발생했습니다.', undefined, 'error');
	};
	return { handleError };
};
export default useHandleError;

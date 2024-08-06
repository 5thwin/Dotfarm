import Toast from '@/app/components/common/Toast';
import { usePathname, useSearchParams } from 'next/navigation';

export function useCopyUrl() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const origin =
		typeof window !== 'undefined' && window.location.origin
			? window.location.origin
			: '';

	const url = `${origin}${pathname}?${searchParams}`;

	const copyCurrentUrlToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(url);
			Toast.fire({
				title: 'URL이 클립보드에 복사되었습니다.',
				icon: 'success',
			});
		} catch (err) {
			Toast.fire({
				title: '클립보드 복사에 실패했습니다.',
				icon: 'error',
			});
		}
	};
	return { copyCurrentUrlToClipboard, url };
}

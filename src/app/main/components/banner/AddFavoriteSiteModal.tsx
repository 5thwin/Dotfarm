import Modal from '@/app/components/common/Modal';
import { useMeStore } from '@/store/meStore';
import { FavoriteSite } from '@/type/me';
import { ensureDomainFormat, getDomain } from '@/utils/url';
import clsx from 'clsx';
import { useRef } from 'react';

type Props = {
	onClose: () => void;
};
export default function AddFavoriteSiteModal({ onClose }: Props) {
	// Refs 생성
	const { addFavoriteSite } = useMeStore();
	const homepageNameRef = useRef<HTMLInputElement>(null);
	const homepageUrlRef = useRef<HTMLInputElement>(null);

	// 폼 제출 처리
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // 폼 기본 제출 동작 방지
		// Refs를 사용하여 input 값들에 접근
		const homepageName = homepageNameRef.current?.value || '';
		const homepageUrl = ensureDomainFormat(homepageUrlRef.current?.value || '');
		// console.log(`Homepage Name: ${homepageName}, Homepage URL: ${homepageUrl}`);
		const domain = getDomain(homepageUrl);
		console.log(homepageUrl, domain);
		const faviconUrl = `https://${domain}/favicon.ico`;

		const newSite: FavoriteSite = {
			icon: faviconUrl,
			name: homepageName,
			url: homepageUrl,
		};
		// 사이트 추가 함수 실행
		addFavoriteSite(newSite);
		onClose(); // 모달 닫기
	};
	const handleCancle = () => {
		onClose();
	};
	return (
		<Modal
			onClose={onClose}
			containerClass={containerStyle}
			closeButton={false}
		>
			<form onSubmit={handleSubmit} className={innerWrapper}>
				<div className={contentsWrapper}>
					<p className="font-bold text-lg">바로가기 추가</p>
					<label htmlFor="homepage-name" className="sr-only">
						홈페이지 명
					</label>
					<input
						ref={homepageNameRef}
						placeholder="홈페이지 명"
						className={inputStyle}
						id="homepage-name"
						name="homepage-name"
					/>
					<label htmlFor="homepage-url" className="sr-only">
						홈페이지 링크
					</label>
					<input
						ref={homepageUrlRef}
						placeholder="홈페이지 링크"
						className={inputStyle}
						id="homepage-url"
						name="homepage-url"
					/>
				</div>
				<div id="add-site-buttons" className={buttonsWrapper}>
					<button
						type="button"
						className={clsx(buttonStyle, 'bg-subGray text-subText flex-[0.3]')}
						onClick={handleCancle}
					>
						취소
					</button>
					<button
						type="submit"
						className={clsx(buttonStyle, 'bg-mainGreen text-white flex-1')}
					>
						적용하기
					</button>
				</div>
			</form>
		</Modal>
	);
}
// style
const containerStyle = clsx('rounded-30 w-[450px] p-30px');
const innerWrapper = clsx('flex flex-col gap-y-5');
const contentsWrapper = clsx('flex flex-col gap-y-2.5');
const buttonsWrapper = clsx('flex gap-x-5');
const inputStyle = clsx('px-2.5 py-[13px] rounded-10', 'border border-subGray');
const buttonStyle = clsx('flexCenter px-10 py-[11px] rounded-10', 'font-bold');

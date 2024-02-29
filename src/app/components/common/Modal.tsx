import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom'; // 추가
import clsx from 'clsx';
import { cn } from '@/utils/cn';

type ModalProps = {
	onClose: () => void;
	children?: ReactNode;
	containerClass?: string;
	closeButton?: boolean;
	closeButtonClass?: string;
};

const Modal: React.FC<ModalProps> = ({
	onClose,
	children,
	containerClass,
	closeButton = true,
	closeButtonClass = '',
}) => {
	const animate = clsx('animate-modalOpen');
	const container = cn(
		'relative',
		'z-50 bg-[#FCFCFC] shadow-main',
		containerClass,
		animate
	);
	useEffect(() => {
		// 모달이 마운트될 때 body의 overflow를 hidden으로 설정
		document.body.style.overflow = 'hidden';

		// 모달이 언마운트될 때 overflow 설정을 원상복구
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []); // 빈 dependency 배열을 사용하여 이 효과를 마운트/언마운트 시에만 실행

	const modalContent = (
		<div
			className={clsx(
				'fixed inset-0 z-40 flex items-center justify-center whitespace-nowrap animate-modalOpen'
			)}
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
					onClose();
				}}
				className="fixed inset-0 z-40 bg-black opacity-25"
			></div>
			<div className={container}>
				{closeButton && (
					<button
						className={clsx('absolute right-5 top-5', closeButtonClass)}
						onClick={(e) => {
							e.stopPropagation();
							onClose();
						}}
					>
						<IcCloseCross />
					</button>
				)}
				{children}
			</div>
		</div>
	);

	// ReactDOM.createPortal을 사용하여 modal-root div에 모달 내용 렌더링
	const rootElement = document.getElementById('modal-root');

	if (!rootElement) {
		throw new Error("Can't find modal root element!");
	}

	return ReactDOM.createPortal(modalContent, rootElement);
};

export default Modal;

const IcCloseCross = () => (
	<svg
		width="27"
		height="27"
		viewBox="0 0 27 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 1L26 26"
			stroke="#7D7B7B"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<path
			d="M26 1L1 26"
			stroke="#7D7B7B"
			stroke-width="2"
			stroke-linecap="round"
		/>
	</svg>
);

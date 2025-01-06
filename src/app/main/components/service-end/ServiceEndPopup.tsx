'use client';
import { useState, useEffect } from 'react';

const ServiceEndPopup = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [doNotShowAgain, setDoNotShowAgain] = useState(false);

	useEffect(() => {
		// localStorage에서 팝업 표시 여부 확인
		const storedDate = localStorage.getItem('serviceEndPopupSeen');
		if (storedDate) {
			const expireDate = new Date(storedDate);
			const now = new Date();
			if (now > expireDate) {
				localStorage.removeItem('serviceEndPopupSeen');
				setIsOpen(true); // 만료되었으므로 팝업 다시 표시
			}
		} else {
			setIsOpen(true); // 저장된 값이 없으면 팝업 표시
		}
	}, []);

	const handleClose = () => {
		setIsOpen(false);

		if (doNotShowAgain) {
			// 3일 동안 팝업 다시 표시하지 않음
			const expireDate = new Date();
			expireDate.setDate(expireDate.getDate() + 3); // 현재 날짜 + 3일
			localStorage.setItem('serviceEndPopupSeen', expireDate.toISOString());
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
				<button
					onClick={handleClose}
					className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
					aria-label="닫기"
				>
					✕
				</button>
				<h2 className="text-2xl font-bold text-gray-800 mb-4">
					서비스 종료 안내
				</h2>
				<p className="text-gray-600 mb-6">
					Dotfarm은 <strong>2025년 1월 22일</strong>자로 서비스를 종료합니다.
					<br />
					그동안 이용해주셔서 감사합니다.
				</p>
				<div className="flex items-center mb-6">
					<input
						type="checkbox"
						id="doNotShowAgain"
						className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
						checked={doNotShowAgain}
						onChange={() => setDoNotShowAgain(!doNotShowAgain)}
					/>
					<label
						htmlFor="doNotShowAgain"
						className="ml-2 text-sm text-gray-600 select-none"
					>
						3일 동안 보지 않기
					</label>
				</div>
				<button
					onClick={handleClose}
					className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
				>
					닫기
				</button>
			</div>
		</div>
	);
};

export default ServiceEndPopup;

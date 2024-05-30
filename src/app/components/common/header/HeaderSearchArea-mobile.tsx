import useMobileSearchStore from '@/store/mobileSearchStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeaderSearchArea() {
	const [query, setQuery] = useState('');
	const router = useRouter();

	const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // 폼 제출 기본 동작 방지
		router.push(`/search?keyword=${encodeURIComponent(query)}`);
		setIsShow(false);
	};

	const { setIsShow } = useMobileSearchStore();

	return (
		<div className="lg:hidden absolute top-full left-0 right-0">
			<div className="h-[60px] bg-white w-screen flex itemCenter">
				<form onSubmit={handleSearch}>
					<label htmlFor="site-search" className="sr-only" />
					<input
						id="site-search"
						placeholder="필요한 정보를 검색해보세요"
						className="p-5 w-full focus:outline-none"
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button type="submit" className="sr-only" />
				</form>
			</div>
			<div
				className="inset-0 h-screen bg-black opacity-50"
				onClick={() => setIsShow(false)}
			></div>
		</div>
	);
}

'use client';
import IcSearch from '@/../public/icon/search.svg';
import useMobileSearchStore from '@/app/support-projects/store/mobileSearchStore';

export default function HeaderSearchButton() {
	const { isShow, setIsShow } = useMobileSearchStore();
	return (
		<button className="search-button" onClick={() => setIsShow(!isShow)}>
			<IcSearch width="19" height="19" stroke="#42C67E" />
		</button>
	);
}

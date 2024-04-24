import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';

export default function MyPageBox() {
	return (
		<div className={clsx(blockStyle)}>
			<h1 className="text-23 font-bold">마이페이지</h1>
			<div className="bg-subGray"></div>
			<div></div>
		</div>
	);
}

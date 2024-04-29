import IcMeatball from '@/../public/icon/meatball.svg';
import { colorSubText } from '@/constants/color';
import { useState } from 'react';
import PostDeleteButton from './PostDeleteButton';
import PostEditButton from './PostEditButton';

type Props = { postId: number };
export default function PostMeatballButton({ postId }: Props) {
	const [isVisible, setIsVisible] = useState(false); // 메뉴 표시 상태를 관리하는 state
	// 메뉴 표시 상태를 토글하는 함수
	const toggleMenu = () => {
		setIsVisible(!isVisible);
	};
	return (
		<div className="relative">
			<button
				onClick={toggleMenu}
				className="rounded-full size-[37px] bg-subGray min-w-[37px] flexCenter"
			>
				<IcMeatball width="13" height="3" fill={colorSubText} />
			</button>
			{isVisible && (
				<div className="absolute left-0 mt-2 w-[110px] h-[74px] bg-white shadow-md rounded-md flex flex-col">
					<PostEditButton postId={postId} />
					<PostDeleteButton postId={postId} />
				</div>
			)}
		</div>
	);
}

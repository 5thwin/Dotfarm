import { getUserMe } from '@/api/user/get';
import {
	blockStyle,
	responsiveContainer,
} from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import IcPost from '@/../public/icon/post.svg';
import IcBookmark from '@/../public/icon/bookmark.svg';
import IcLike from '@/../public/icon/unfilledHeart.svg';
import MobileBackButton from '@/app/components/common/MobileBackButton';
export default async function MyPageBox() {
	const me = await getUserMe();
	return (
		<section className={responsiveContainer}>
			<div className={clsx('flex flex-col gap-y-5')}>
				<header className={clsx('flex gap-x-2.5 items-center')}>
					<MobileBackButton />
					<h1 className="text-23 font-bold">마이페이지</h1>
				</header>
				<div className="flex justify-between items-center bg-subGray px-5 py-2.5 rounded-10">
					<div className="flex gap-x-2.5 items-center">
						<div className="w-[35px] h-[35px] relative rounded-full overflow-hidden">
							<Image
								src={
									me?.profileImage?.path ||
									'/profile/defaultProfileImg_32x32.svg'
								}
								alt="profile"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<span className="font-bold">{me?.nickname}</span>
					</div>
					<Link href={'/profile/edit'}>
						<span className="text-subText text-sm font-bold">프로필 편집</span>
					</Link>
				</div>
				<ul className="flex flex-col items-stretch">
					<div className={myPageListStyle}>
						<div className="flex gap-x-2.5 items-center">
							<IcPost width="15" height="15" stroke="#282828" />
							<span className="font-bold">작성글</span>
						</div>
						<Link href={`/profile/${me?.id}/posts`} className="text-subText">
							<RightBracket />
						</Link>
					</div>

					<div className={myPageListStyle}>
						<div className="flex gap-x-2.5 items-center">
							<IcBookmark width="15" height="15" stroke="#282828" />
							<span className="font-bold">관심목록</span>
						</div>
						<Link href={'/bookmark'} className="text-subText">
							<RightBracket />
						</Link>
					</div>

					<div className={myPageListStyle}>
						<div className="flex gap-x-2.5 items-center">
							<IcLike width="15" height="16" stroke="#282828" fill="none" />
							<span className="font-bold">좋아요</span>
						</div>
						<Link href={'/profile/like'} className="text-subText">
							<RightBracket />
						</Link>
					</div>
				</ul>
			</div>
		</section>
	);
}

// style
const myPageListStyle = clsx(
	'p-15px rounded-10 flex justify-between items-center'
);

// icon
const RightBracket = () => (
	<svg
		width="10"
		height="18"
		viewBox="0 0 10 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M1 1L9 9L1 17" stroke="#7D7B7B" stroke-linecap="round" />
	</svg>
);

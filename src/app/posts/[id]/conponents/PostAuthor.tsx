// 'use server';

import { UserPartial } from '@/type/user';
import { getUserRegionString } from '@/utils/koreaRegions';
import clsx from 'clsx';
import Image from 'next/image';

type Props = { author: UserPartial };
export default function PostAuthor({ author }: Props) {
	const { profileImage, region, farmingExperience, majorCrops } = author;

	// 구분점(i 태그)를 삽입할 조건을 체크하는 함수
	const renderDivider = (condition: boolean) =>
		condition ? <i className={devidorStyle} /> : null;
	const regionString = getUserRegionString(author);
	return (
		<div className="flex gap-x-2.5 p-15px rounded-10 bg-subGray items-center">
			<div className={profileImageWrapper}>
				{profileImage?.path ? (
					<Image
						src={profileImage?.path}
						alt="이 게시글의 작성자가 설정해놓은 프로필 이미지입니다."
						fill
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
					/>
				) : (
					<DefaultImage />
				)}
			</div>
			<div className="flex flex-col gap-y-5px">
				<p className="font-bold "> {author.nickname}</p>
				<div className="flex gap-x-5px items-center text-subText text-sm">
					{/* 조건부 렌더링을 사용하여 각 정보가 null이 아닐 때만 표시 */}
					{regionString && <span>{regionString}</span>}
					{regionString && farmingExperience && renderDivider(true)}
					{farmingExperience && <span>{farmingExperience}</span>}
					{farmingExperience && majorCrops && renderDivider(true)}
					{majorCrops && <span>{majorCrops}</span>}
				</div>
			</div>
		</div>
	);
}
// style
const profileImageWrapper = clsx(
	'rounded-full w-[45px] h-[45px] relative overflow-hidden'
);

const devidorStyle = clsx('w-0 h-2.5 border border-subText');

const DefaultImage = () => (
	<Image
		src="/profile/defaultProfileImg.svg"
		alt="작성자 프로필 이미지"
		fill
		placeholder="blur"
		quality={30}
		blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
	/>
);

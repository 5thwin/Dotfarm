import { UserPartial } from '@/type/user';
import { getUserRegionString } from '@/utils/koreaRegions';
import clsx from 'clsx';
import Image from 'next/image';

type Props = { author: UserPartial };
export default function CommunityPostItemAuthor({ author }: Props) {
	const { profileImage, region, farmingExperience, majorCrops } = author;
	// 구분점(i 태그)를 삽입할 조건을 체크하는 함수
	const renderDivider = (condition: boolean) =>
		condition ? <i className={devidorStyle} /> : null;
	const regionString = getUserRegionString(author);
	return (
		<div className={userInfoStyle}>
			<Image
				src={author.profileImage?.path || '/profile/defaultProfileImg.svg'}
				alt={`${author.nickname}님의 프로필 이미지`}
				className="rounded-full"
				width={32}
				height={32}
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
			/>
			<div className={'flex gap-x-2.5 sm:items-center sm:flex-row flex-col'}>
				<p className="font-bold sm:text-base text-sm">{author.nickname}</p>
				<p className={userSubInfoStyle}>
					{regionString && <span>{regionString}</span>}
					{regionString && farmingExperience && renderDivider(true)}
					{farmingExperience && <span>{farmingExperience}</span>}
					{farmingExperience && majorCrops && renderDivider(true)}
					{majorCrops && <span>{majorCrops}</span>}{' '}
				</p>
			</div>
		</div>
	);
}
// style
const userInfoStyle = clsx('flex gap-x-2.5 items-center');
const devidorStyle = clsx('w-0 h-2.5 border border-subText');

const userProfileImgStyle = clsx('rounded-full bg-green-200');
const userSubInfoStyle = clsx(
	'text-xs sm:text-sm text-subText flex gap-x-5px items-center flex-wrap'
);

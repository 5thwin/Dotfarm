'use server';

import { User } from '@/type/user';
import clsx from 'clsx';
import Image from 'next/image';

type Props = { author: User };
export default async function PostAuthor({ author }: Props) {
	const profileImage = author.profileImageURL;
	return (
		<div className="flex gap-x-2.5 p-15px rounded-10 bg-subGray items-center">
			<div className={profileImageWrapper}>
				{profileImage ? (
					<Image
						src={author.profileImageURL}
						alt="작성자 프로필 이미지"
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
					<span>{author.region}</span>
					<i className={devidorStyle} />
					<span>{author.farmingExperience}</span>
					<i className={devidorStyle} />
					<span>{author.majorCrops}</span>
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

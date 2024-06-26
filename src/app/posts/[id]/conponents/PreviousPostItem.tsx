import CustomImage from '@/app/components/common/CustomImage';
import { PostPartial } from '@/type/post';
import { getFullImagePath } from '../../../../utils/image';
import IcChat from '@/../public/icon/chat.svg';
import { colorMainGreen } from '@/constants/color';

type Props = {
	post: PostPartial;
};

export default function PreviousPostItem({ post }: Props) {
	const imageUrl = post.images.length > 0 ? post.images[0].path : undefined;
	const commentCount = post.commentCount;
	return (
		<div className="flex px-5 py-15px gap-x-5 justify-between w-full">
			<div className="flex-grow flex flex-col gap-y-5px lg:gap-y-2.5 lg:max-w-[calc(100%-170px)]">
				<span
					id={`post${post.id}_category`}
					className="text-subText text-sm lg:hidden"
				>
					#{post.category}
				</span>
				<p id={`post${post.id}_title`} className="font-bold line-clamp-2">
					{post.title}
				</p>
				<div className="hidden lg:inline-block">
					<p className="text-sm line-clamp-2">{post.content}</p>
				</div>
				{commentCount > 0 && (
					<div className="flex py-5px gap-x-5px lg:hidden  items-center">
						<IcChat width="13" height="13" fill={colorMainGreen} />
						<span className="font-bold text-sm text-mainGreen">
							댓글 {post.commentCount}개
						</span>
					</div>
				)}
			</div>
			{imageUrl && (
				<div
					id="image_wrapper"
					className="flex-shrink-0 w-[75px] h-[75px] lg:w-[150px] lg:h-[88px] rounded-10 overflow-hidden relative"
				>
					<CustomImage
						className="object-cover"
						src={getFullImagePath(imageUrl)}
						fill
						alt={post.title}
						errorImagePath=""
					/>
				</div>
			)}
		</div>
	);
}

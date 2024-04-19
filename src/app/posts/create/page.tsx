import MobileBackButton from '@/app/components/common/MobileBackButton';
import withLayout from '@/app/hoc/withLayout';
import { blockStyle } from '@/app/styles/common/blockStyle';
import clsx from 'clsx';
import Form from './components/Form';
import ImagesWrapper from './components/ImagesWrapper';
import { getPost } from '@/api/post/get';
import Fallback from '../components/Fallback';

type Params = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

async function Page({ searchParams }: Params) {
	const postId =
		typeof searchParams.id === 'string' ? Number(searchParams.id) : null;
	const pageTitle = postId ? '글 수정하기' : '글 작성하기'; // id 존재 여부에 따라 페이지 제목 결정
	const post = postId ? await getPost(postId) : undefined;
	if (postId && !post) return <Fallback />;
	return (
		<div className="flex flex-col items-center w-screen h-screen">
			<section className={pageContainer}>
				<div className="flex gap-x-2.5 items-center">
					<MobileBackButton />
					<h1 className="text-xl font-bold text-center">{pageTitle}</h1>
				</div>
				<div className="flex flex-col gap-y-5px">
					<p className="font-bold text-lg">이미지 첨부</p>
					<ImagesWrapper />
				</div>
				<Form post={post} />
			</section>
		</div>
	);
}

export default withLayout(Page, false, false);
// style
const pageContainer = clsx(
	blockStyle,
	'rounded-none lg:rounded-30',
	'w-screen lg:w-auto h-screen lg:h-auto ',
	'shadow-none lg:shadow-main',
	'flex flex-col gap-y-5',
	'lg:mt-[72px]'
);

'use client';
import clsx from 'clsx';
import CategorySelect from './CategorySelect';
import ImageSelect from './ImageSelect';
import useCreatePostStore from '../store/createPostStore';
import { writePost } from '@/api/post/create';
import Toast from '@/app/components/common/Toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { getLocalItem } from '@/utils/localstorage';
import { useEffect } from 'react';

type Props = {
	postId: number | string | null;
};
export default function Form({ postId }: Props) {
	const router = useRouter();
	const { title, setTitle, contents, setContents, category, imageURL, reset } =
		useCreatePostStore();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title.length === 0)
			return Toast.fire('제목을 입력해주세요.', undefined, 'warning');

		if (contents.length === 0)
			return Toast.fire('내용을 입력해주세요.', undefined, 'warning');

		if (!category)
			return Toast.fire('카테고리를 선택해주세요', undefined, 'warning');
		const auth = getLocalItem('auth');
		const accessToken = auth ? JSON.parse(auth).accessToken : null;
		const res = await writePost(
			title,
			contents,
			category,
			imageURL,
			accessToken
		);

		if (res.id) {
			reset();
			router.push(`/post?id=${res.id}`);
		}
	};
	return (
		<form className={formStyle} onSubmit={handleSubmit}>
			<input
				className={titleStyle}
				placeholder="제목을 입력해주세요."
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<textarea
				className={contentsStyle}
				placeholder="설명을 작성해주세요"
				value={contents}
				onChange={(e) => setContents(e.target.value)}
			/>
			<div className="flex flex-col gap-y-5px">
				<label className="font-bold text-lg">카테고리</label>
				<CategorySelect />
			</div>
			<div className="flex flex-col gap-y-5px">
				<p className="font-bold text-lg">이미지 첨부</p>
				<ImageSelect />
			</div>

			<button type="submit" className={getButtonStyle(true)}>
				적용하기
			</button>
		</form>
	);
}
// style
const formStyle = clsx('flex flex-col gap-y-2.5 lg:w-[590px]');
const titleStyle = clsx('text-xl font-bold outline-none');
const contentsStyle = clsx('resize-none outline-none flex-1', 'min-h-[300px]');
const getButtonStyle = (isAvailable: boolean) =>
	clsx('bg-mainGreen rounded-10 py-[11px]', 'text-white font-bold', {
		'opacity-30': !isAvailable,
	});
//

//'일반', '중고', '구인', 'QNA'

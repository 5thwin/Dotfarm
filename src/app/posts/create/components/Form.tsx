'use client';
import clsx from 'clsx';
import CategorySelect from './CategorySelect';
import useCreatePost from '../hook/useCreatePost';
import { Post } from '@/type/post';
import { useEffect } from 'react';

type Props = {
	post?: Post;
	defaultCategory?: string;
};

export default function Form({ post, defaultCategory }: Props) {
	const { title, setTitle, contents, setContents, handleSubmit, reset } =
		useCreatePost(post);

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
				<CategorySelect defaultCategory={defaultCategory} />
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

//'일반', '중고', '구인/구직', '질문하기'

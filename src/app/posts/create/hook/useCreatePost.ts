import useCreatePostStore from '../store/createPostStore';
import Toast from '@/app/components/common/Toast';
import { getLocalItem } from '@/utils/localstorage';
import { writePost } from '@/api/post/create';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPost } from '@/api/post/get';

export default function useCreatePost(postId?: number | string) {
	const router = useRouter();
	const {
		title,
		setTitle,
		contents,
		setContents,
		category,
		setCategory,
		imageURL,
		// setImageURL,
		reset,
	} = useCreatePostStore();

	const isModifyMode = !!postId; //수정모드 판별,
	useEffect(() => {
		reset();

		// 서버로부터 데이터를 비동기적으로 받아오는 함수
		async function fetchData(postId: number | string) {
			const response = await getPost(postId);
			if (response) {
				setTitle(response.title);
				setContents(response.content);
				setCategory(response.category);
				// setImageURL(response.contentImageURL);
			}
		}
		postId && fetchData(postId);
	}, []);
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
			router.push(`/posts/${res.id}`);
			return;
		}
	};
	return {
		title,
		setTitle,
		contents,
		setContents,
		category,
		imageURL,
		reset,
		handleSubmit,
	};
}

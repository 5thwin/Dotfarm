import useCreatePostStore from '../store/createPostStore';
import Toast from '@/app/components/common/Toast';
import { writePost } from '@/api/post/create';
import { useRouter } from 'next/navigation';
import { patchPost } from '@/api/post/update';
import { useEffect, useState } from 'react';
import useCreateImageStore from '../store/createImageStore';
import useHandleError from '@/hooks/useHandleError';
import { Post } from '@/type/post';
import { isErrorObject } from '@/utils/error/httpError';
export default function useCreatePost(post?: Post) {
	const router = useRouter();
	const {
		title,
		setTitle,
		contents,
		setContents,
		category,
		setCategory,
		reset,
	} = useCreatePostStore();
	const {
		serverImagePaths,
		reset: imageReset,
		setImageUrls,
		setServerImagePaths,
	} = useCreateImageStore();
	const { handleError } = useHandleError();
	const isModifyMode = !!post; //수정모드 판별,
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		if (isModifyMode) {
			setTitle(post.title);
			setContents(post.content);
			setCategory(post.category);
			setImageUrls(
				post.images.map((image) => ({ url: image.path, state: 'Complete' }))
			);
			setServerImagePaths(
				post.images.map((image) => image.path.split('/').pop() || image.path)
			);
		}
	}, []);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (title.length === 0)
			return Toast.fire('제목을 입력해주세요.', undefined, 'warning');

		if (contents.length === 0)
			return Toast.fire('내용을 입력해주세요.', undefined, 'warning');

		if (!category)
			return Toast.fire('카테고리를 선택해주세요', undefined, 'warning');

		if (isModifyMode) {
			//patch 로직
			try {
				setIsLoading(true);

				const res = await patchPost(
					post.id,
					title,
					contents,
					category,
					serverImagePaths
				);
				if (isErrorObject(res)) {
					throw Error(JSON.stringify(res));
				}
				if (res.id) {
					reset();
					imageReset();
					router.replace(`/posts/${res.id}`);
					return;
				}
			} catch (error) {
				if (error instanceof Error) {
					handleError({ error });
				}
			} finally {
				setIsLoading(false);
			}

			return;
		}
		try {
			setIsLoading(true);
			const res = await writePost(title, contents, category, serverImagePaths);
			if (isErrorObject(res)) {
				throw Error(JSON.stringify(res));
			}
			if (res.id) {
				reset();
				imageReset();
				router.replace(`/posts/${res.id}`);
				return;
			}
		} catch (error) {
			if (error instanceof Error) {
				handleError({ error });
			}
		} finally {
			setIsLoading(false);
		}
	};

	return {
		title,
		setTitle,
		contents,
		setContents,
		category,
		reset,
		handleSubmit,
		isLoading,
	};
}

'use client';
import { CustomSelect } from '@/app/components/common/CustomSelect';
import { OptionType } from '@/utils/select';
import useCreatePostStore from '../store/createPostStore';
import { useEffect } from 'react';
import { isPostCategory, postCategorys } from '@/constants/category';

type Props = { defaultCategory?: string };
export default function CategorySelect({ defaultCategory }: Props) {
	const { category, setCategory } = useCreatePostStore();
	useEffect(() => {
		if (defaultCategory && isPostCategory(defaultCategory)) {
			setCategory(defaultCategory);
		}
	}, []);
	return (
		<CustomSelect
			placeholder="카테고리를 선택해주세요"
			options={options}
			defaultValue={
				defaultCategory && isPostCategory(defaultCategory)
					? { label: defaultCategory, value: defaultCategory }
					: undefined
			}
			value={category ? { label: category, value: category } : undefined}
			onChange={(newValue) => {
				setCategory(newValue.value);
			}}
		/>
	);
}

const options: OptionType[] = postCategorys.map((category) => ({
	label: category,
	value: category,
}));

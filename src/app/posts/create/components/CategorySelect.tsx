'use client';
import { CustomSelect } from '@/app/components/common/CustomSelect';
import { OptionType } from '@/utils/select';
import useCreatePostStore from '../store/createPostStore';

export default function CategorySelect() {
	const { category, setCategory } = useCreatePostStore();
	return (
		<CustomSelect
			placeholder="카테고리를 선택해주세요"
			options={options}
			value={category ? { label: category, value: category } : undefined}
			onChange={(newValue) => {
				setCategory(newValue.value);
			}}
		/>
	);
}

const options: OptionType[] = [
	{
		label: '일반',
		value: '일반',
	},
	{
		label: '중고',
		value: '중고',
	},
	{
		label: '구인/구직',
		value: '구인/구직',
	},
	{
		label: '질문하기',
		value: '질문하기',
	},
];

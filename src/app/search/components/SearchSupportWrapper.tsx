import PostsList from '@/app/posts/components/PostsList';
import PostsPagination from '@/app/posts/components/PostsPagination';
import SupportProgramItem from '@/app/support-projects/components/SupportProgramItem';
import { Post, PostPartial } from '@/type/post';
import { SupportProgram } from '@/type/support';
import { sortPrograms } from '@/utils/supportPrograms';
import clsx from 'clsx';

type Props = {
	supports: SupportProgram[];
	total?: number;
};
export default function SearchSupportWrapper({ supports, total }: Props) {
	const totalPage = total && Math.ceil(total / 5);
	const sortedPrograms = sortPrograms(supports);

	return (
		<div className={mainContainer}>
			<h2 className="text-2xl font-bold">지원사업 & 교육 일정</h2>
			{sortedPrograms.map((program, index) => (
				<SupportProgramItem
					key={`search_supports_${index}`}
					program={program}
				/>
			))}
			{totalPage === 1 ? null : (
				<PostsPagination pageParamsString="supportPage" totalPage={totalPage} />
			)}
		</div>
	);
}

// style
const mainContainer = clsx(
	'flex flex-col gap-y-25px p-25px rounded-30 shadow-main bg-white'
);

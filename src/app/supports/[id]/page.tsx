import RecentSupports from './components/RecentSupports';
import SupportPost from './components/SupportPost';

type Params = {
	id: string;
};

type Props = {
	params: Params;
};
export default function Page({ params }: Props) {
	const id = Number(params.id);
	return (
		<div className="flex flex-col items-center">
			<div className="max-w-[768px] min-w-[390px] flex flex-col gap-y-15px w-full ">
				<SupportPost id={id} />
				<RecentSupports />
			</div>
		</div>
	);
}

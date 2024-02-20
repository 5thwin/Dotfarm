import QNAList from './QNAList';

export default async function QnATab() {
	return (
		<div>
			{/* @ts-expect-error Server Component */}
			<QNAList />
		</div>
	);
}

import { getSupportbyId } from '@/api/support/get';
import SupportPostHead from './SupportPostHead';
import SupportPostImage from './SupportPostImage';
import SupportPostBody from './SupportPostBody';

type Props = {
	id: number;
};
export default async function SupportPost({ id }: Props) {
	const support = await getSupportbyId(id);
	if (!support) return null;

	return (
		<section className="flex flex-col gap-y-30px rounded-20 bg-white px-15px py-5 shadow-main md:mt-5">
			<SupportPostHead support={support} />
			<SupportPostImage support={support} />
			<SupportPostBody support={support} />
		</section>
	);
}

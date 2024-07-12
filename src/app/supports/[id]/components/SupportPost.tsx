import { getSupportbyId } from '@/api/support/get';
import SupportPostHead from './SupportPostHead';
import SupportPostImage from './SupportPostImage';
import SupportPostBody from './SupportPostBody';
import SupportPostBottom from './SupportPostBottom';
import clsx from 'clsx';
import { getInterestCheck } from '@/api/user/interest/get';
import { getUserIdByAccessToken } from '@/api/auth/token/utils';

type Props = {
	id: number;
};
export default async function SupportPost({ id }: Props) {
	const support = await getSupportbyId(id);
	const userId = getUserIdByAccessToken();
	const res = await getInterestCheck(id);
	if (!support) return null;
	if (res && res.isInterest) {
		support.isInterested = true;
	}

	return (
		<section className="flex flex-col gap-y-30px rounded-20 bg-white px-15px py-5 shadow-main md:mt-5">
			<SupportPostHead support={support} backbutton />
			<SupportPostImage support={support} />
			<SupportPostBody support={support} />
			<SupportPostBottom
				support={support}
				className={bottomStyle}
				isLogined={!!userId}
			/>
		</section>
	);
}

// style
const bottomStyle = clsx(
	'fixed bottom-0 bg-white left-0 right-0 bg-opacity-60 backdrop-blur-md z-10',
	'lg:static lg:bg-transparent lg:backdrop-blur-none '
);

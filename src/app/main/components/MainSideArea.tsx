import { getAccessTokenFromCookie } from '@/api/auth/token/utils';
import LoginBox from './box/LoginBox';
import IssueBox from './issue/IssueBox';

export default function MainSideArea() {
	const accessToken = !!getAccessTokenFromCookie(); //access token 존재 여부로 로그인 여부 파악
	return (
		<aside
			id="left-side-section"
			className="flex flex-col gap-y-5 lg:gap-y-30px lg:min-w-[418px] lg:flex-[0.5]"
		>
			{!accessToken && <LoginBox />}
			<IssueBox />
		</aside>
	);
}

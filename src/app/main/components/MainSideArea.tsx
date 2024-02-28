import LoginBox from './box/LoginBox';
import IssueBox from './issue/IssueBox';

export default function MainSideArea() {
	return (
		<aside
			id="left-side-section"
			className="flex flex-col gap-y-5 lg:gap-y-30px lg:min-w-[418px]"
		>
			<LoginBox />
			<IssueBox />
		</aside>
	);
}

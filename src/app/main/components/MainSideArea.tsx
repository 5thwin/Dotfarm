import LoginBox from './box/LoginBox';
import IssueBox from './issue/IssueBox';

export default function MainSideArea() {
	return (
		<aside
			id="left-side-section"
			className="flex flex-col gap-y-30px lg:w-[418px]"
		>
			<LoginBox />
			<IssueBox />
		</aside>
	);
}

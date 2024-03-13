import clsx from 'clsx';
import SignUpForm from './components/SignUpForm';
// 회원가입: 회원정보 페이지
export default function Pages() {
	return (
		<div className="container mx-auto h-screen flexCenter flex-col">
			<div id="signup-form-container" className={signUpContainer}>
				<div
					id="signup-form-header"
					className="flex flex-col items-center gap-y-1"
				>
					<p className="text-sm text-subText">프로필 입력</p>
					<p className="text-mainText text-lg font-bold">
						자신의 농업 프로필을 입력해주세요
					</p>
				</div>
				<SignUpForm />
			</div>
		</div>
	);
}

//style
const signUpContainer = clsx(
	'p-30px flex flex-col items-center gap-y-10 rounded-50 shadow-main'
);

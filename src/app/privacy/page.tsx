export default function Page() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4">개인정보 처리방침</h1>

			{/* 서론 */}
			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-2">1. 서론</h2>
				<p>
					반달소프트(이하 "회사")는 농업 관련 지원사업 정보를 제공하는 "닷팜"
					서비스(이하 "서비스")를 운영하며, 서비스 이용 과정에서 이용자의
					개인정보를 수집, 이용, 보호하는데 최선을 다하고 있습니다.
				</p>
				<p>
					본 개인정보 처리방침은 회사가 어떠한 정보를 수집하고, 그 정보를 어떻게
					사용하며, 정보 보호를 위해 어떤 조치를 취하는지 등을 설명합니다.
				</p>
				<p>
					회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항을 통하여
					공지할 것입니다.
				</p>
			</section>

			{/* 수집하는 개인정보 항목 및 수집 방법 */}
			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-2">
					2. 수집하는 개인정보 항목 및 수집 방법
				</h2>
				<p>회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.</p>
				<ul className="list-disc pl-6 mb-4">
					<li>
						회원가입 시 필수 정보: 카카오 프로필 정보(닉네임/프로필사진/SNS 연동
						ID), 카카오 이메일, 거주지
					</li>
					<li>회원가입 시 선택 정보: 성별, 연령대, 생일</li>
					<li>자동으로 수집되는 정보: 쿠키, 접속 로그, 이용 시간 등</li>
				</ul>
				<p>개인정보 수집방법: 홈페이지 (회원가입, 게시판)</p>
				<p>
					쿠키를 활용한 정보 수집에서 사용자는 쿠키 저장을 거부할 수 있으나, 이
					경우 로그인 및 일부 서비스 이용에 제한이 있을 수 있습니다.
				</p>
			</section>

			{/* 개인정보의 수집 및 이용 목적 */}
			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-2">
					3. 개인정보의 수집 및 이용 목적
				</h2>
				<p>회사는 수집한 개인정보를 다음과 같은 목적으로 이용합니다.</p>
				<ul className="list-disc pl-6 mb-4">
					<li>서비스 제공 및 개선</li>
					<li>
						회원 관리 - 회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의
						부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인
					</li>
					<li>마케팅 및 광고에의 활용</li>
				</ul>
				<p>목적이 변경될 경우 사전 동의를 구하도록 합니다.</p>
			</section>

			{/* 개인정보의 보유 및 이용 기간 */}
			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-2">
					4. 개인정보의 보유 및 이용 기간
				</h2>
				<p>
					회사는 이용자의 개인정보를 회원 탈퇴 시까지 보유합니다. 법령에 따라
					보유해야 하는 경우, 해당 법령에서 정한 기간 동안 개인정보를
					보관합니다.
				</p>
				{/* 법령에 의한 개인정보 보유 내용 추가 */}
			</section>

			{/* 개인정보의 파기 절차 및 방법 */}
			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-2">
					5. 개인정보의 파기 절차 및 방법
				</h2>
				<p>
					목적 달성 후 별도의 DB로 옮겨져 일정 기간 저장된 후 파기되며, 파기 시
					전자적 파일 형태는 기술적 방법을 사용해 삭제하고, 종이 문서는
					분쇄하거나 소각합니다.
				</p>
			</section>

			{/* 개인정보의 제3자 제공 */}
			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-2">
					6. 개인정보의 제3자 제공
				</h2>
				<p>회사는 개인정보를 제3자에게 제공하지 않습니다.</p>
			</section>

			{/* 이용자의 권리와 그 행사 방법 */}
			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-2">
					7. 이용자의 권리와 그 행사 방법
				</h2>
				{/* 이용자 권리 행사 방법 설명 추가 */}
			</section>

			{/* 개인정보의 안전성 확보 조치 */}
			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-2">
					8. 개인정보의 안전성 확보 조치
				</h2>
				<p>
					회사는 개인정보보호법 등 관련 법령을 준수하여 이용자의 개인정보 보호를
					위한 기술적·관리적 보호대책을 마련하고 있습니다.
				</p>
			</section>

			{/* 개인정보 보호책임자 */}
			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-2">9. 개인정보 보호책임자</h2>
				<p>- 책임자: 김경섭</p>
				<p>- 연락처: 010-2319-9530</p>
				<p>- 이메일: info@vandalsoft.com</p>
				{/* 개인정보 침해 신고 및 상담 기관 정보 추가 */}
			</section>

			{/* 고지의 의무 */}
			<section className="mb-8">
				<h2 className="text-2xl font-semibold">10. 고지의 의무</h2>
				<p>
					본 방침은 시행일로부터 적용되며, 법령 변경이나 회사 내부 방침 변경
					등으로 인해 개정될 경우 웹사이트를 통해 공지됩니다.
				</p>
				<p>- 개인정보 처리방침 공고일자 : 2024년 4월 12일</p>
			</section>
		</div>
	);
}

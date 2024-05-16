// 주어진 텍스트에서 URL을 찾아 링크로 변환하는 함수
export function linkify(text: string): React.ReactNode {
	// URL을 찾기 위한 정규 표현식
	const urlRegex =
		/(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
	// 적절한 형태로 매치되고 남은 부분을 배열로 나누기
	const parts: React.ReactNode[] = [];
	let lastOffset = 0;

	// replace 함수를 사용하여 URL과 그 주변 텍스트를 처리
	text.replace(urlRegex, (match, p1, offset) => {
		// URL 앞의 텍스트를 추가
		parts.push(text.slice(lastOffset, offset));
		// URL을 <a> 태그로 변환하여 추가
		parts.push(
			<a
				key={offset}
				href={match}
				target="_blank"
				rel="noopener noreferrer"
				className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
			>
				{match}
			</a>
		);
		// 마지막 처리 위치를 업데이트
		lastOffset = offset + match.length;
		return match;
	});

	// 마지막 URL 이후의 텍스트를 추가
	if (lastOffset < text.length) {
		parts.push(text.slice(lastOffset));
	}

	return parts;
}

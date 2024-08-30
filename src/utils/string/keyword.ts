//지원사업 키워드에서 사용되는 단어들을 문자열 배열로 반환하는 함수
//제목에서 사용되는 단어 중 중요 키워드를 문자열 배열로 반환하는 함수

// 불용어 목록 (제거할 단어들)
const stopWords: string[] = [
	'에서',
	'있습니다',
	'을',
	'로',
	'와',
	'을',
	'로',
	'을',
	'을',
	'은',
	'도',
	'과',
	'에',
	'을',
	'이',
	'가',
	'한',
	'를',
	'는',
	'및',
	'이',
	'그',
	'하기',
	'이하',
	//특수문자들
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'-',
	'_',
	'+',
	'=',
	'[',
	']',
	'{',
	'}',
	'|',
	'\\',
	';',
	':',
	"'",
	'"',
	',',
	'<',
	'.',
	'>',
	'/',
	'?',
	'~',
	'`',
	'·',
	'함께',
	'관련',
	'대한',
	'위한',
	'대해',
	'관한',
	'관하여',
	// 추가적인 불용어는 필요에 따라 확장 가능
];

// 키워드 추출 함수
export function extractKeywords(
	title: string,
	content: string,
	maxKeywords: number = 10,
	requiredKeywords: string[] = []
): string[] {
	// 제목과 내용을 하나의 텍스트로 결합
	const text: string = `${title} ${content}`;

	// 텍스트를 공백을 기준으로 분할하고, 불용어 제거 및 2글자 이하 단어 제거
	const words: string[] = text
		.split(/\s+/)
		.filter((word) => !stopWords.includes(word))
		.filter((word) => word.length > 2);

	// 단어 빈도 계산
	const wordFrequencies: Record<string, number> = {};
	words.forEach((word) => {
		const lowerCasedWord = word.toLowerCase();
		wordFrequencies[lowerCasedWord] =
			(wordFrequencies[lowerCasedWord] || 0) + 1;
	});

	// 빈도수가 높은 상위 maxKeywords개의 단어 추출
	const sortedKeywords: string[] = Object.entries(wordFrequencies)
		.sort(([, freqA], [, freqB]) => freqB - freqA) // 빈도수로 정렬
		.slice(0, maxKeywords) // 상위 maxKeywords 단어 선택
		.map(([word]) => word); // 단어만 추출

	// 필수 키워드가 있으면 추가 (중복 제거)
	requiredKeywords.forEach((keyword) => {
		if (!sortedKeywords.includes(keyword)) {
			sortedKeywords.push(keyword);
		}
	});

	return sortedKeywords;
}

// description 추출 함수
export function extractDescription(
	content: string,
	maxLength: number = 160
): string {
	// 텍스트에서 HTML 태그 제거
	const plainText = content.replace(/<\/?[^>]+(>|$)/g, '').trim();

	// 이모지 제거
	const textWithoutEmoji = plainText
		.replace(
			/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD800-\uDFFF]|[\u2600-\u26FF]|[\uFE0F]|[\u2934-\u2935]|[\u2190-\u21FF])/g,
			''
		)
		.trim();

	// 문장을 공백 기준으로 분할
	const sentences = textWithoutEmoji
		.split('.')
		.filter((sentence) => sentence.trim().length > 0);

	// 첫 번째 문장부터 추가하여 최대 길이를 맞추기
	let description = '';
	for (const sentence of sentences) {
		if ((description + sentence).length > maxLength) {
			break;
		}
		description += sentence + '.';
	}
	//줄바꿈 제거
	description = description.replace(/(\r\n|\n|\r)/gm, ' ');

	// 최종 description이 maxLength를 넘으면 자르기
	if (description.length > maxLength) {
		description = description.substring(0, maxLength).trim();
	}

	return description;
}

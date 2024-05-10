import Image from 'next/image';

export default function NoneSearchResult() {
	return (
		<div className="w-[1200px] h-[500px] rounded-30 bg-white shadow-main p-25px flexCenter flex-col gap-y-25px">
			<Image
				src="/notFound/notFoundSearchResult.svg"
				alt="검색결과가 없습니다."
				width={145}
				height={172.99}
			/>
			<p className="text-lg font-bold">검색결과가 없습니다</p>
		</div>
	);
}

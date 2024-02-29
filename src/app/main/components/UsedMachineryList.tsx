import { formatPriceToKRW } from '@/utils/price';

export default function UsedMachineryList() {
	return (
		<div className="grid grid-cols-4 gap-x-5 gap-y-5">
			<SampleItem />
			<SampleItem />
			<SampleItem />
			<SampleItem />
			<SampleItem />
			<SampleItem />
			<SampleItem />
			<SampleItem />
			<SampleItem />
			<SampleItem />
			<SampleItem />
			<SampleItem />
			<SampleItem />
		</div>
	);
}

const SAMPLE = {
	region: '수원',
	yearOfManufacture: 9,
	title: '게시글의 제목을 나타냅니다. 문자열 타입으로 제목을 저장합니다.',
	imageUrl:
		'농기계의 이미지를 나타내는 URL입니다. 문자열 타입으로 이미지의 웹 주소(URL)를 저장합니다.',
	price: 21000000,
};
function SampleItem() {
	return (
		<div className="flex flex-col gap-y-2.5">
			<div
				id="used-machinery"
				className="rounded-10 w-[227px] h-[154px] bg-subGray"
			></div>
			<p>{SAMPLE.title}</p>
			<p className="font-bold">{formatPriceToKRW(SAMPLE.price)}</p>
		</div>
	);
}

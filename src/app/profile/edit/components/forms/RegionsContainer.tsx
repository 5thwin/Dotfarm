import { KoreaRegions } from '@/utils/koreaRegions';
import ProfileRegion from './ProfileRegion';
import ProfileSubRegion from './ProfileSubRegion';

type Props = {
	krRegions: KoreaRegions;
};
export default function RegionsContainer({ krRegions }: Props) {
	return (
		<div className="flex gap-x-5px">
			<ProfileRegion regions={krRegions} />
			<ProfileSubRegion regions={krRegions} />
		</div>
	);
}

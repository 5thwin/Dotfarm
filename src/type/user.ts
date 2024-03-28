export type UserMe = {
	id: number;
	profileImageURL: string | null;
	nickname: string;
	status: string;
	role: string;
	region: string | null;
	subRegion: string | null;
	farmingExperience: string;
	majorCrops: string | null;
	createdAt: string;
	updatedAt: string;
};

export type User = {
	id: number;
	kakaoId: number;
	nickname: string;
	region: string | null;
	subRegion: string | null;
	profileImageURL: string | null;
	role: string;
	status: string;
	accessToken: string;
	refreshToken: string;
	createdAt: string;
	updatedAt: string;
	farmingExperience: string;
	majorCrops: string | null;
};

export type UserPartial = Pick<User, 'id' | 'nickname' | 'farmingExperience'> &
	Partial<
		Pick<User, 'profileImageURL' | 'majorCrops' | 'region' | 'subRegion'>
	>;

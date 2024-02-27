export type UserMe = {
	id: number;
	profileImageURL: string;
	userName: string;
	status: string;
	role: string;
	region: string;
	subRegion: string;
	farmingExperience: string;
	majorCrops: string;
	createdAt: string;
	updatedAt: string;
};

export type User = {
	id: number;
	kakaoId: number;
	userName: string;
	region: string;
	subRegion: string;
	profileImageURL: string;
	role: string;
	status: string;
	accessToken: string;
	refreshToken: string;
	createdAt: string;
	updatedAt: string;
	farmingExperience: string;
	majorCrops: string;
};

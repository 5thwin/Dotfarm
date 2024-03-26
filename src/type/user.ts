export type UserMe = {
	id: number;
	profileImageURL: string;
	nickname: string;
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
	nickname: string;
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

export type UserPartial = {
	id: number;
	nickname: string;
	profileImageURL: null | string;
	majorCrops: null | string;
	region: null | string;
	subRegion: null | string;
	farmingExperience: string;
};

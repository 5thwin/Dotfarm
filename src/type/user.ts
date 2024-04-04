export type UserMe = {
	id: number;
	profileImageURL: string | null;
	nickname: string;
	status: 'INACTIVE' | 'ACTIVE';
	role: string;
	region: string | null;
	subRegion: string | null;
	farmingExperience: FarmExperience;
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
	status: 'INACTIVE' | 'ACTIVE';
	accessToken: string;
	refreshToken: string;
	createdAt: string;
	updatedAt: string;
	farmingExperience: FarmExperience | null;
	majorCrops: string | null;
};

export type UserPartial = Pick<User, 'id' | 'nickname' | 'farmingExperience'> &
	Partial<
		Pick<
			User,
			'profileImageURL' | 'majorCrops' | 'region' | 'subRegion' | 'status'
		>
	>;

export const experienceList: FarmExperience[] = [
	'귀농에 관심있음',
	'예비 창농인',
	'창농 1~3년차',
	'창농 4~6년차',
	'창농 7~9년차',
	'창농 10년차 이상',
];
export type FarmExperience =
	| '귀농에 관심있음'
	| '예비 창농인'
	| '창농 1~3년차'
	| '창농 4~6년차'
	| '창농 7~9년차'
	| '창농 10년차 이상';

// 닉네임 유효성 검사 관련 타입
export type NicknameValidationStatus =
	| 'duplicate' // 중복됨
	| 'invalidLength' // 길이가 부적절함
	| 'invalidChar' // 부적절한 문자 포함
	| 'valid' // 유효함
	| 'initial'; // 초기 상태 혹은 검사 전

// 닉네임 검증 상태를 위한 타입
export type NicknameValidation = {
	status: NicknameValidationStatus;
	message: string;
};

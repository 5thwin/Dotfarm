// utils/kakao.ts
import axios from 'axios';
import { getLocalItem, setLocalItem } from './localstorage';

export const CLIENT_ID = '085659cf35f2ec6877adf6b573ffbf89';
export const REDIRECT_URI = 'http://localhost:3000/auth/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const getKakaoOauthToken = async (code: string) => {
	const makeFormData = (params: { [key: string]: string }) => {
		const searchParams = new URLSearchParams();
		Object.keys(params).forEach((key) => {
			searchParams.append(key, params[key]);
		});

		return searchParams;
	};

	try {
		const res = await axios({
			method: 'POST',
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
			url: 'https://kauth.kakao.com/oauth/token',
			data: makeFormData({
				grant_type: 'authorization_code',
				client_id: CLIENT_ID,
				redirect_uri: REDIRECT_URI,
				code, // 인가 코드
			}),
		});
		const data = res.data;
		setLocalItem('kakao_access_token', data.access_token);
		setLocalItem('kakao_refresh_token', data.refresh_token);

		// sessionStorage/localStorage에 결과값 저장
		// state에 kakao accesstoken 저장
	} catch (err) {
		console.warn(err);
	}
};

const getKakaoUserInfo = async () => {
	const kakaoAccessToken = getLocalItem('kakao_access_token');
	try {
		const res = await axios({
			method: 'GET',
			headers: {
				Authorization: `Bearer ${kakaoAccessToken}`, // 카카오 토큰 api로 얻은 accesstoken 보내기
			},
			url: 'https://kapi.kakao.com/v2/user/me',
		});

		// sessionStorage/localStorage에 사용자 정보 저장
		setLocalItem('kakao_id', res.data.id);
		setLocalItem('kakao_nickname', res.data.kakao_account.profile.nickname);
		// 서비스 내 유저 조회를 위해 kakaoId, nickname 전달
	} catch (e) {
		console.log('e : ', e);
	}
};

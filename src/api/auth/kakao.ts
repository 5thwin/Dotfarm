import axios from 'axios';

const APIURL = 'http://localhost:8000/auth/kakao/callback';

export const getKakaoLogin = async (code: string) => {
	try {
		const res = await axios.get<{
			accessToken: string;
			refreshToken: string;
			userInfo: any;
		}>(APIURL, { params: { code } });
		console.log(res.data);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

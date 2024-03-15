import axios from 'axios';

const APIURL = 'http://localhost:8080/auth/kakao/callback';

export const getKakaoLogin = async (code: string) => {
	try {
		const res = await axios.get<{
			userInfo: any;
			isUser: boolean;
		}>(APIURL, { params: { code } });
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

// utils/kakao.ts
export const CLIENT_ID = '085659cf35f2ec6877adf6b573ffbf89';
export const REDIRECT_URI = 'http://localhost:3000/auth/oauth/callback';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

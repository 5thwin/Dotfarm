// utils/kakao.ts
export const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
export const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

//https://kauth.kakao.com/oauth/authorize?client_id=085659cf35f2ec6877adf6b573ffbf89&response_type=code&redirect_uri=http://localhost:3000/auth/oauth/callback

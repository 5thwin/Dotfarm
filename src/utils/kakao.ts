// utils/kakao.ts
import axios from 'axios';
import { getLocalItem, setLocalItem } from './localstorage';

export const CLIENT_ID = '085659cf35f2ec6877adf6b573ffbf89';
export const REDIRECT_URI = 'http://localhost:3000/auth/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

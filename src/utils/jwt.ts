import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
	sub: string; // 표준 클레임 중 하나인 subject
	name: string;
	exp: number; // 토큰 만료 시간
	// 필요한 다른 클레임들을 여기에 추가하세요.
}

export function decodeJWT(token: string) {
	const decoded: DecodedToken = jwtDecode<DecodedToken>(token);
	return decoded;
}

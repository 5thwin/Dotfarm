// middleware.ts
import { NextResponse, NextRequest } from 'next/server';
import { COOKIE_KEY_ACCESS } from './api';

export function middleware(request: NextRequest) {
	const accessCookie = request.cookies.get(COOKIE_KEY_ACCESS);
	const accessToken = accessCookie?.value;

	// 토큰 유효성 검사 로직 (여기서는 단순히 토큰 존재 유무만 검사)
	if (!accessToken && request.nextUrl.pathname.startsWith('/posts/create')) {
		// 토큰이 없고, /posts/create 경로에 접근 시도 시 /401로 리디렉션
		return NextResponse.redirect(new URL('/login-required', request.url));
	}

	// // 토큰 유효성 검사 로직 (여기서는 단순히 토큰 존재 유무만 검사)
	// if (!token && request.nextUrl.pathname.startsWith('/posts/create')) {
	//   // 토큰이 없고, /posts/create 경로에 접근 시도 시 /401로 리디렉션
	//   return NextResponse.redirect(new URL('/401', request.url));
	// }

	const response = NextResponse.next();

	return response;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000, // sitemap별 최대 크기 (최대 크기가 넘어갈 경우 복수개의 sitemap으로 분리됨)
  changefreq: 'daily', // 페이지 주소 변경 빈도 (검색엔진에 제공됨) - always, daily, hourly, monthly, never, weekly, yearly 중 택 1
  priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
  exclude: [
    '/login-required', // login-required로 시작하는 페이지 주소 제외
  ], // sitemap 등록 제외 페이지 주소
  robotsTxtOptions: {
    // 정책 설정
    policies: [
      {
        userAgent: '*', // 모든 agent 허용
        allow: '/', // 모든 페이지 주소 크롤링 허용
        disallow: [
          '/login-required', // exclude로 시작하는 페이지 주소 크롤링 금지
        ]
      },
      // 추가 정책이 필요할 경우 배열 요소로 추가 작성
    ]
  } // robots.txt 옵션 설정
};

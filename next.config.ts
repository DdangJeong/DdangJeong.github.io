import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD,
  },
  output: 'export', // 정적 파일 생성 활성화
  basePath: '', // '/<repository-name>'로 설정 (필요시)
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },  
}

export default nextConfig

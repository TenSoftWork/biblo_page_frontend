# 1. 빌드 단계
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. 실행 단계 - Next.js 서버 사용
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/package*.json ./
# 프로덕션 종속성만 설치
RUN npm ci --only=production
# Next.js 빌드 결과물 복사
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
# 중요 설정 파일들 복사
COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/jsconfig.json ./
COPY --from=build /app/postcss.config.mjs ./
COPY --from=build /app/eslint.config.mjs ./
EXPOSE 3000
# Next.js 실행
CMD ["npm", "start"]
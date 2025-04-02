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
# 필요한 경우 next.config.js도 복사
COPY --from=build /app/next.config.js ./
EXPOSE 3000
# Next.js 실행
CMD ["npm", "start"]
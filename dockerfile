# 1. 빌드 단계 - Node.js 버전 업그레이드
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. 실행 단계
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# Next.js의 경우 출력 디렉토리가 다를 수 있음 (보통 .next 또는 out)
# COPY --from=build /app/.next /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
FROM node:16-alpine as builder
RUN npm i -g pnpm
WORKDIR /app
COPY *.json pnpm-lock.yaml .npmrc /app/
RUN pnpm i
COPY . /app
RUN pnpm run build

FROM nginx:1.23.0-alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

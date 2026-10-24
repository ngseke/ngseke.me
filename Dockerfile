FROM node:24-alpine AS builder
RUN corepack enable
WORKDIR /app
COPY *.json pnpm-lock.yaml pnpm-workspace.yaml /app/
RUN pnpm i --frozen-lockfile
COPY . /app
RUN pnpm run build

FROM nginx:1.23.0-alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

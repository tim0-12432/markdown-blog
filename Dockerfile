FROM node:lts as dependencies
WORKDIR /
COPY package.json package-lock.json ./
RUN npm ci

FROM node:lts as builder
WORKDIR /
COPY . .
COPY --from=dependencies /node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /
ENV NODE_ENV production
COPY --from=builder /next.config.js ./
COPY --from=builder /public ./public
COPY --from=builder /posts ./posts
COPY --from=builder /config ./config
COPY --from=builder /.next ./.next
COPY --from=builder /node_modules ./node_modules
COPY --from=builder /package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]
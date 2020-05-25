FROM node:12-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY public ./usr/src/app/public
COPY . .
CMD ["yarn", "start"]
EXPOSE 3300
FROM node:12-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY public ./app/public
COPY . ./
EXPOSE 3333
RUN yarn start
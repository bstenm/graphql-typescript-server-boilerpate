FROM node:8

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install --production

COPY . /app

RUN yarn build-ts

EXPOSE 4000

ENTRYPOINT ["node", "dist/"]

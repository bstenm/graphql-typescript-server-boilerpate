FROM node:8

WORKDIR /usr/app

COPY package.json yarn.lock /usr/app/

RUN yarn install

COPY . /usr/app

EXPOSE 4000

ENTRYPOINT ["yarn", "watch"]


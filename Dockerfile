FROM node:8

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install --production

COPY . /app

RUN yarn build-ts

EXPOSE 4000

# RUN npm install pm2 -g
# CMD ["pm2-runtime", "app.js"]

ENTRYPOINT ["node", "dist/"]

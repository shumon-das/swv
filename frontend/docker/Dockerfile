FROM node:16

WORKDIR /var/www/symfonywithvue

COPY ./frontend/package.json ./

RUN yarn install

COPY ./frontend .

EXPOSE 3000

CMD ["yarn", "run", "dev"]
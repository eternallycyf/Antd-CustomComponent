FROM node:14-alpine AS installer
WORKDIR /usr/app

COPY ./package*.json ./
RUN yarn install
COPY ./ ./
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000
USER node

CMD [ "yarn","start" ]
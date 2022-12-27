FROM node:14-alpine3.15 as builder

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN yarn config set registry https://registry.npmmirror.com/
RUN yarn 

COPY ./ ./
RUN npm run build:pro

FROM nginx:alpine

WORKDIR /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ['nginx', '-g', 'daemon off;']

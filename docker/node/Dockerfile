FROM node:6-alpine

RUN apk --no-cache --update add git

RUN npm i -g firebase-tools

WORKDIR /app

ENV HOST 0.0.0.0

EXPOSE 80

EXPOSE 9005

EXPOSE 5000

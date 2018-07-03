# Cloud Funcitons for Firebase Quick Start

## set firebase token

You must get and set firebase token.

```shell
$ cat .env
FIREBASE_TOKEN=xxxxx
```

## start docker container

build and start the container.

```shell
$ docker-compose -f docker-compose.yml up -d --build
$ docker exec -it CONTAINER /bin/sh
```

## yarn install

`cd` functions dir, and run `yarn install`.

```shell
$ cd funtions
$ yarn install
```

## deploy

deploy your own project.

```shell
$ yarn run deploy --project projectId
# or set up alias and deploy
$ firebase use --add
$ yarn run deploy
```

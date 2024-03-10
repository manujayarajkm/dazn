
## Description

This project is created with the help of Nest Js framework

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Authentication

Some routes(POST,PUT and DELETE) are protected with Authguard and you have to pass the bearer token. You can obtian the token by calling the '/auth/login' endpoint and pass the username and password as 'admin'.
The postman collection of all the routes can be found in docs folder


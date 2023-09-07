FROM node:16-alpine3.17
WORKDIR /home/node/app
COPY . .
CMD [ "npm", "run", "dev" ]
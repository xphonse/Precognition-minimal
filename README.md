1. To create a ephereral Docker container that installs the node modules run:  
`docker run --rm -u "$(id -u):$(id -g)" -v $(pwd):/home/node/app -w /home/node/app node:16-alpine3.17 npm install`
1. To start container run:  
`docker-compose up -d`
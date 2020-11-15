FROM node:Node_Version-alpine3.10
WORKDIR /srv/testing
COPY ./yarn.lock .
COPY ./package.json .
RUN yarn install
EXPOSE Exposed_Port
COPY . .
CMD ["yarn", "start"]

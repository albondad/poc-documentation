FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN echo [debug] ${MESSAGE}
RUN echo [debug] ${PORT}
CMD [ "yarn", "start"]
FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
ARG MESSAGE
ARG PORT
RUN echo [debug] $MESSAGE
RUN echo [debug] ${MESSAGE}
RUN echo [debug] $PORT
RUN echo [debug] ${PORT}
CMD [ "yarn", "start"]
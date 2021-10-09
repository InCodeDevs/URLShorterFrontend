FROM node:16
EXPOSE 3000
WORKDIR /incode-url
COPY . /incode-url
RUN npm install
ENTRYPOINT node .
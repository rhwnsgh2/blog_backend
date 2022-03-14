From node:latest

WORKDIR /app

COPY package*.json /app/

RUN npm install

RUN npm build

CMD ["npm","start"]

EXPOSE 3000
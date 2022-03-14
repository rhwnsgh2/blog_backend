From node:latest

WORKDIR /app

COPY package*.json /app/

RUN npm install

CMD ["npm","start"]

EXPOSE 3000
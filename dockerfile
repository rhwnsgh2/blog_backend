From node:alpine

WORKDIR /app

COPY package*.json /app/
COPY . /app/

RUN npm install

RUN npm run build

CMD ["npm","start"]

EXPOSE 1234
FROM node:20-alpine

WORKDIR /src

COPY ./src /src

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

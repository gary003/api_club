FROM node:20-alpine

WORKDIR /appClub

COPY package*.json ./

RUN ["npm", "install"]

COPY . .

EXPOSE 8080

RUN ["npm", "run", "build"]

CMD npm run start-docker

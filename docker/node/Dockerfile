FROM node:6.11.3-alpine

WORKDIR /usr/src/app
COPY package.json server/ ./
RUN npm install
RUN npm install -g nodemon

EXPOSE 3000

CMD ["npm", "run", "dev"]

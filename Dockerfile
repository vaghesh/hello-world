FROM node:carbon

WORKDIR /usr/src/app
COPY app/ ./

RUN npm install
EXPOSE 8000
ENTRYPOINT ["node", "index.js"]
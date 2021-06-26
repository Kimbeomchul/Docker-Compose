
FROM node:10
 
WORKDIR /usr/src/app

COPY ./ ./

# 종속성 다운로드 Redis ... .
RUN npm install

CMD ["node","server.js"]
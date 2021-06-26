const express = require("express");
const redis = require("redis");

// Redis 클라이언트 생성
const client = redis.createClient({

    // 동작하는 주소가 redis 서버라면
    // host: "https://redis-server.com",
    // port: 6379

    // 도커 Compose 이용시
    // host 옵션을 docker-compose.yml 파일에 명시한 컨테이너 이름으로 주면된다.
    host : "redis-server",
    port : 6379
});

const app = express();

client.set("number",0);
app.get('/', (req,res) => {
    client.get("number",(err, number) =>{
        // 현재 숫자를 가져온 후에 1씩올려주기
        client.set("number", parseInt(number) + 1);
        res.send('Counter : '+ number);
    });
});

app.listen(8080);
console.log("server running");
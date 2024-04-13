const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/todoRoutes');

// dotenv 모듈을 사용해 환경변수 로드
require('dotenv').config();

// Express 애플리케이션 생성 및 변수 할당
const app = express();
const PORT = process.env.port || 5000;

/*
    express.json() 미들웨어: 클라이언트로부터 오는 JSON 데이터를 처리하기 위한 미들웨어
*/
app.use(express.json());
app.use(cors());
app.use(routes);

// MongoDB 연결
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// 지정된 포트에서 애플리케이션 실행
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// server/server.js  (CommonJS 버전)
require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5173;

// 정적 파일 서빙: /public 폴더
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req, res, next) => {
  if (req.method !== 'GET') return next();
  // 정적 파일로 못 찾은 GET 요청은 index.html로
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// 헬스체크
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});


app.listen(PORT, () => {
  console.log(`👉 http://localhost:${PORT}`);
});

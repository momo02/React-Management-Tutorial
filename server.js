//서버 모듈을 위한 기능 선언
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000; //서버 포트 5000번으로 설정

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api 명시. "/api/hello" 호출 시, 클라이언트에게 "Hello Express!"라는 메시지를 리턴
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!" });
});

// 5000번 포트로 앱을 동작 시키고, 동작시 로그 출력.
app.listen(port, () => console.log(`Listening on port ${port}`));

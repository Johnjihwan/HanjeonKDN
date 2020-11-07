const express = require('express')
const app = express();
const PORT = 5000;
 
function handleListening (){
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);

function handleHome(req, res){
    res.send("hello");
}

app.get("/", handleHome);

// Express 서버생성 
var express = require('express'); var app = express();

// 10-1 내용 추가 
var bodyParser = require('body-parser'); 

// express-session이 error발생 -> Cmd -> "npm install express-session" 으로 설치완료.
var session = require('express-session'); 
var fs = require("fs")

// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다. 
app.set('views', __dirname + '/views'); 

// 서버가 HTML 렌더링을 할 때, EJS엔진을 사용하도록 설정합니다.
 app.set('view engine', 'ejs'); 
 app.engine('html', require('ejs').renderFile); 
 var server = app.listen(3000, function(){ console.log("Express server has started on port 3000") }); 

 // 스타일(CSS) 적용하기 
 app.use(express.static('public')); 

 // "localhost:3000/dudukri"으로 접속 -> 농부페이지 
var routes = require('./routes/dudukri_server_html'); 
app.use('/dudukri', routes);
var users = require('./routes/users'); app.use('/users', users);

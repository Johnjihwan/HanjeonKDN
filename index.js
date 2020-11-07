const express = require('express')
const app = express();
const PORT = 5000;
 
function handleListening (){
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);

// 서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다. 
app.set('views', __dirname + '/views'); 

// 서버가 HTML 렌더링을 할 때, EJS엔진을 사용하도록 설정합니다.
 app.set('view engine', 'ejs'); 
 app.engine('html', require('ejs').renderFile);  
 app.set(express.static(__dirname + './style'))
 app.get('/',(req, res) => {
     res.render('email.html')
 })
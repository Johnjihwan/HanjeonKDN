let authNum = Math.random().toString().substr(2,6);

let emailTemplete;
ejs.renderFile('./emailFrom.ejs', {authCode : authNum}, function (err, data) {
  if(err){console.log('ejs.renderFile err')}
  emailTemplete = data;
});

const mailOptions = {
    from: '전송 이메일',
    to: '받는 이메일',
    subject: '메일 제목',
    html : emailTemplete
  };
  
  // 실제 메일 전송되는 부분
  smtpTransport.sendMail(mailOptions, (error, info) =>{
    if(error){
        res.json({msg:'err'});
    }else{
        res.json({msg:'sucess'});
    }
    smtpTransport.close();
  });
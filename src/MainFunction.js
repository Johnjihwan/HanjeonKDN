$('.login').click(function(){
    let YesOrNo = confirm("로그인 페이지로 이동할까요?");
    if(YesOrNo == true){
        location.href = 'signup_page.html';
    }
    else{
        location.reload();
    }
})
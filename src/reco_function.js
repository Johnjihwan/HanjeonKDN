// 메인페이지 load 기본상태는 팝업 display:none
let LayerPopup = $(".layer-popup");
LayerPopup.removeClass("show");

// 팝업 열기
$(document).on("click", ".btn-open", function (e){
    let target = $(this).attr("href");
    $(target).addClass("show");
});

// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
    LayerPopup = $(".layer-popup");
    if(LayerPopup.has(e.target).length === 0){
        LayerPopup.removeClass("show");
    }
});

//login value 가져오기.
let emailValue;
$('#exampleInputEmail1').keydown(function(){
    emailValue = $('#exampleInputEmail1').val();
    // console.log(emailValue);
});
let pwValue;
$('#exampleInputPassword1').keydown(function(){
    pwValue = $('#exampleInputPassword1').val();
    // console.log(pwValue);
})
$('#submit').click(function(){
    console.log("email: "+emailValue+", pw: "+pwValue);
})